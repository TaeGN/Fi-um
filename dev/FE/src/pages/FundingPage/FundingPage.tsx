import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPage.module.scss';
import { FundingItem, Ranking } from '@/components/organisms';
import { getFundingsQuery } from '@/api/queries/funding';
import { useQuery } from '@tanstack/react-query';
import { Funding } from '@/types';
import { Modal } from '@/components/molecules';
import ModalFunding from '@/components/molecules/utils/Modal/contents/ModalFunding/ModalFunding';
import useModal from '@/hooks/useModal';
import { useCallback, useState } from 'react';
import { Button } from '@/components/atoms';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

interface FundingPageProps {
  className?: string;
}

const FundingPage = ({ className }: FundingPageProps): JSX.Element => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const { isOpen, openToggle, closeToggle } = useModal();
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const userType = userInfo?.userType ?? 3;
  const { data: fundings } = useQuery<Funding[], Error>(getFundingsQuery());

  const onModal = useCallback(() => {
    setScrollTop(document.documentElement.scrollTop);
    openToggle();
  }, []);

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
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
      <Ranking />

      {fundings?.map((funding) => (
        <div key={funding.itemNo + funding.itemName}>
          <FundingItem {...funding} onModal={onModal} />
        </div>
      ))}
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
