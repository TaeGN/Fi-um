import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPage.module.scss';
import { FundingItem, Ranking } from '@/components/organisms';
import { getFundingsQuery } from '@/api/queries/funding';
import { useQuery } from '@tanstack/react-query';
import { Funding, Item, Ranking as RankingType } from '@/types';
import { Modal } from '@/components/molecules';
import ModalFunding from '@/components/molecules/utils/Modal/contents/ModalFunding/ModalFunding';
import useModal from '@/hooks/useModal';
import { useCallback, useState } from 'react';
import { Button } from '@/components/atoms';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import { getRankingsQuery, getSponsorShipQuery } from '@/api/queries';
import { USER_TYPE } from '@/constants';
import { useMemo } from 'react';

interface FundingPageProps {
  className?: string;
}

const FundingPage = ({ className }: FundingPageProps): JSX.Element => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const { isOpen, openToggle, closeToggle } = useModal();
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const userType = userInfo?.userType ?? 3;
  const { data: fundings } =
    userType === USER_TYPE.아이들
      ? useQuery<Funding[], Error>(getFundingsQuery())
      : useQuery<Item[], Error>(getSponsorShipQuery());
  const { data: rankings } = useQuery<RankingType[]>(getRankingsQuery());
  const ranking = useMemo<RankingType | undefined>(() => {
    return rankings?.find((ranking) => ranking.type === '펀딩');
  }, [rankings]);

  const onModal = useCallback(() => {
    setScrollTop(document.documentElement.scrollTop);
    openToggle();
  }, []);

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['funding-page'],
        'flex-container-col',
      )}
    >
      {userType === 1 && (
        <Button
          className={convertClassNameList(
            convertClassName(className, styles),
            'self-end m-1',
            'primary xsmall',
          )}
          label="등록하기"
          onClick={() => navigate(`/create`, { state: 'funding' })}
        />
      )}
      {ranking && <Ranking ranking={ranking} />}
      {fundings?.map((funding) => {
        return (
          <div key={funding.itemNo + funding.itemName}>
            <FundingItem {...funding} onModal={onModal} />
          </div>
        );
      })}
      <Modal scrollTop={scrollTop} isOpen={isOpen} toggle={closeToggle}>
        <ModalFunding
          className={className}
          onClick={() => {
            console.log('펀딩!!!!');
            closeToggle();
          }}
          closeToggle={closeToggle}
        />
      </Modal>
    </div>
  );
};

export default FundingPage;
