import { convertClassName, convertClassNameList } from '@/utils';
import styles from './DepositPage.module.scss';
import { DepositProduct } from '@/components/organisms';
import { MyBankInfo } from '@/types';
import useModal from '@/hooks/useModal';
import { useState, useCallback } from 'react';
import { Modal, ModalDeposit, Swiper } from '@/components/molecules';
import { getBankInfoQuery } from '@/api/queries';
import { useQuery } from '@tanstack/react-query';
import useAuth from '@/hooks/useAuth';

interface DepositPageProps {
  className?: string;
}

export type LabelType = '입금' | '출금' | '가입' | '해지';

const DepositPage = ({ className }: DepositPageProps): JSX.Element => {
  const { isOpen, openToggle, closeToggle } = useModal();
  const [label, setLabel] = useState<LabelType>('입금');
  const [curDeposit, setCurDeposit] = useState<MyBankInfo | undefined>(
    undefined,
  );
  const { data: depositList } = useQuery<MyBankInfo[]>(getBankInfoQuery());
  const { userInfo } = useAuth();

  const onModal = useCallback((label: string, deposit: MyBankInfo) => {
    setLabel(label as LabelType);
    setCurDeposit(deposit);
    openToggle();
  }, []);

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['deposit-page'],
      )}
    >
      <div className={styles['deposit-page__main']}>
        {depositList?.map((deposit) => (
          <DepositProduct
            key={deposit.bankName + deposit.productType}
            deposit={deposit}
            onModal={onModal}
          />
        ))}
      </div>

      <Swiper
        className={convertClassNameList(
          'bg-gray-light',
          styles['deposit-page__swiper'],
        )}
        type="autoplay"
      >
        {depositList?.map((deposit) => (
          <div
            key={deposit.bankName + deposit.productType}
            className={convertClassNameList(
              styles['deposit-page__swiper--item'],
              styles['deposit-page__main'],
            )}
          >
            {deposit.description}
          </div>
        ))}
      </Swiper>

      {curDeposit && (
        <Modal isOpen={isOpen} toggle={closeToggle}>
          <ModalDeposit
            point={userInfo?.point ?? 0}
            className={className}
            label={label}
            deposit={curDeposit}
            toggle={closeToggle}
          />
        </Modal>
      )}
    </div>
  );
};

export default DepositPage;
