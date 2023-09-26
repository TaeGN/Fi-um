import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPage.module.scss';
import { FundingItem, Ranking } from '@/components/organisms';
import { getFundingsQuery } from '@/api/queries/funding';
import { useQuery } from '@tanstack/react-query';
import { Funding, Ranking as RankingType } from '@/types';
import { Modal } from '@/components/molecules';
import ModalFunding from '@/components/molecules/utils/Modal/contents/ModalFunding/ModalFunding';
import useModal from '@/hooks/useModal';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/atoms';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import { getRankingsQuery, getSponsorShipQuery } from '@/api/queries';
import { USER_TYPE } from '@/constants';
import { useMemo } from 'react';
import { postSponsorshipSupport } from '@/api/sponsor';
import { postFunding } from '@/api/funding';

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
      : useQuery<Funding[], Error>(getSponsorShipQuery());
  const [item, setItem] = useState<any>();
  const { data: rankings } = useQuery<RankingType[]>(getRankingsQuery());
  const ranking = useMemo<RankingType | undefined>(() => {
    return rankings?.find((ranking) => ranking.type === '펀딩');
  }, [rankings]);

  const onModal = useCallback((i: Funding) => {
    setItem(i);
    setScrollTop(document.documentElement.scrollTop);
    openToggle();
  }, []);

  const sponBtn = (id: number, price: number) => {
    if (userType === USER_TYPE.아이들) {
      postFunding(id, price)
        .then(() => alert('펀딩 성공!'))
        .catch((err) => alert(err.response.data.msg));
    } else {
      postSponsorshipSupport(id, price)
        .then(() => alert('후원 성공!'))
        .catch((err) => alert(err.response.data.msg));
    }
    closeToggle();
  };
  console.log(fundings);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="page-loading">
          <img
            style={{ height: '250px', width: '250px' }}
            src="./img/loading/funding.gif"
          />
        </div>
      )}

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
            <FundingItem key={funding.itemNo} {...funding} onModal={onModal} />
          );
        })}
        <Modal scrollTop={scrollTop} isOpen={isOpen} toggle={closeToggle}>
          <ModalFunding
            className={className}
            item={item}
            onClick={sponBtn}
            closeToggle={closeToggle}
          />
        </Modal>
      </div>
    </>
  );
};

export default FundingPage;
