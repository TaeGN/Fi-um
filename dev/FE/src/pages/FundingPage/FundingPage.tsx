import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPage.module.scss';
import { FundingItem, Ranking } from '@/components/organisms';
import { getFundingsQuery } from '@/api/queries/funding';
import { useQuery } from '@tanstack/react-query';
import { Funding } from '@/types';
import { Modal } from '@/components/molecules';
import ModalFunding from '@/components/molecules/utils/Modal/contents/ModalFunding/ModalFunding';
import useModal from '@/hooks/useModal';
import { useCallback } from 'react';

interface FundingPageProps {
  className?: string;
}

const FundingPage = ({ className }: FundingPageProps): JSX.Element => {
  const { data: fundings } = useQuery<Funding[], Error>(getFundingsQuery());
  console.log(fundings);

  const { isOpen, toggle } = useModal();

  const onModal = useCallback(() => {
    toggle();
  }, []);

  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <Ranking />
      {fundings?.map((funding) => (
        <div key={funding.itemNo + funding.itemName}>
          <FundingItem {...funding} onModal={onModal} />
        </div>
      ))}

      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalFunding
          className={className}
          onClick={() => console.log('펀딩!!!!')}
          toggle={toggle}
        />
      </Modal>
    </div>
  );
};

export default FundingPage;
