import { convertClassName, convertClassNameList } from '@/utils';
import styles from './DepositPage.module.scss';
import { DepositProduct } from '@/components/organisms';
import { MyDeposit } from '@/types';
import useModal from '@/hooks/useModal';
import { useState, useCallback, useMemo } from 'react';
import { Modal, ModalDeposit, Swiper } from '@/components/molecules';
import { getUserDepositSavingQuery } from '@/api/queries';
import { useQuery } from '@tanstack/react-query';
import useAuth from '@/hooks/useAuth';
import { DepositImpl } from '@/models/deposit';

interface DepositPageProps {
  className?: string;
}

const initialDepositList: MyDeposit[][] = [];

type ProductType = '예금' | '적금';
const bankNames = ['햇살은행', '신한은행'];
const productTypes: ProductType[] = ['예금', '적금'];

for (let bIdx = 0; bIdx < 3; bIdx++) {
  initialDepositList.push([
    new DepositImpl(bankNames[bIdx], productTypes[0]),
    new DepositImpl(bankNames[bIdx], productTypes[1]),
  ]);
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
  // const { data: myDepositList } = useQuery<Deposit[]>(getBankDepositQuery());
  const { userInfo } = useAuth();
  const onModal = useCallback((label: string, deposit: MyDeposit) => {
    setLabel(label as LabelType);
    setCurDeposit(deposit);
    openToggle();
  }, []);

  const depositList = useMemo(() => {
    const depositList = [];
    for (let index = 0; index < bankNames.length; index++) {
      for (let pIdx = 0; pIdx < 2; pIdx++) {
        const deposit = myDepositList?.find(
          ({ bankName, productType }) =>
            bankName === bankNames[index] && productType === productTypes[pIdx],
        );
        depositList.push(deposit ?? initialDepositList[index][pIdx]);
      }
    }
    return depositList.sort((a, b) => (a.productType < b.productType ? -1 : 1));
  }, [myDepositList]);

  console.log('depositList', depositList);
  console.log('myDepositList', myDepositList);

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

      <Swiper>
        <div className={styles['deposit-page__swiper--item']}>aa</div>
        <div className={styles['deposit-page__swiper--item']}>aa</div>
        <div className={styles['deposit-page__swiper--item']}>aa</div>
        <div className={styles['deposit-page__swiper--item']}>aa</div>
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
