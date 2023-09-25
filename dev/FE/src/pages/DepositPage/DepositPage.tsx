import { convertClassName, convertClassNameList } from '@/utils';
import styles from './DepositPage.module.scss';
import { DepositProduct } from '@/components/organisms';
import { MyDeposit } from '@/types';
import useModal from '@/hooks/useModal';
import { useState, useCallback, useMemo } from 'react';
import { Modal, ModalDeposit, Swiper } from '@/components/molecules';
import { getBankInfoQuery, getUserDepositSavingQuery } from '@/api/queries';
import { useQuery } from '@tanstack/react-query';
import useAuth from '@/hooks/useAuth';

interface DepositPageProps {
  className?: string;
}

export type LabelType = '입금' | '출금' | '가입' | '해지';

const DepositPage = ({ className }: DepositPageProps): JSX.Element => {
  const { isOpen, openToggle, closeToggle } = useModal();
  const [label, setLabel] = useState<LabelType>('입금');
  const [curDeposit, setCurDeposit] = useState<MyDeposit | undefined>(
    undefined,
  );
  const { data: myDepositList } = useQuery<MyDeposit[]>(
    getUserDepositSavingQuery(),
  );
  const { data: bankList } = useQuery<MyDeposit[]>(getBankInfoQuery());
  const { userInfo } = useAuth();
  const onModal = useCallback((label: string, deposit: MyDeposit) => {
    setLabel(label as LabelType);
    setCurDeposit(deposit);
    openToggle();
  }, []);

  const depositList = useMemo(
    () =>
      bankList
        ?.map(
          (bank) =>
            myDepositList?.find(
              ({ bankName, productType }) =>
                bankName === bank.bankName && productType === bank.productType,
            ) || bank,
        )
        ?.sort((a, b) => (a.productType < b.productType ? -1 : 1)),
    [myDepositList, bankList],
  );

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
        {bankList?.map((bank) => (
          <div
            key={bank.bankName + bank.productType}
            className={convertClassNameList(
              styles['deposit-page__swiper--item'],
              styles['deposit-page__main'],
            )}
          >
            {bank.description}
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
