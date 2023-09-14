import { BankLogo, Button, Text } from '@/components/atoms';
import styles from './DepositProduct.module.scss';
import {
  convertClassName,
  convertClassNameList,
  formatCurrency,
} from '@/utils';
import { useMemo, MouseEvent } from 'react';
import { Deposit } from '@/types';

interface DepositProductProps {
  className?: string;
  deposit: Deposit;
  onModal: (e: MouseEvent<HTMLButtonElement>) => void;
}

const DepositProduct = ({
  className,
  deposit,
  onModal,
}: DepositProductProps) => {
  const { bankLogoClassName, title } = useMemo(() => {
    let bankLogoClassName = null;
    switch (deposit.bankName) {
      case '신한':
        bankLogoClassName = 'shinhan normal';
        break;
      case '국민':
        bankLogoClassName = 'kb normal';
        break;
      case '하나':
        bankLogoClassName = 'hana normal';
        break;
    }
    return {
      bankLogoClassName,
      title: `${deposit.bankName} ${deposit.productType}`,
    };
  }, [deposit.bankName, deposit.productType]);

  return (
    <div
      className={`${styles['deposit-product']} ${convertClassName(
        className,
        styles,
      )}`}
    >
      <div className={styles.banklogo}>
        <BankLogo className={bankLogoClassName} />
      </div>
      <div className={styles.title}>
        <Text text={title} />
        <Text text={formatCurrency('123123')} />
      </div>
      <div className={styles.buttons}>
        {deposit.productType === '입출금' && (
          <>
            <Button
              onClick={onModal}
              label="입금"
              value="입금"
              className={convertClassNameList(
                'primary xsmall',
                styles['deposit-product__item'],
              )}
            />
            <Button
              onClick={onModal}
              label="출금"
              value="출금"
              className={convertClassNameList(
                'gray xsmall',
                styles['deposit-product__item'],
              )}
            />
          </>
        )}
        {deposit.productType === '적금' &&
          (deposit.savingBalance > 0 ? (
            <Text text="만기일 : 2023. 09. 15" />
          ) : (
            <>
              <div
                className={convertClassNameList(
                  styles['deposit-product__item'],
                )}
              >
                <Text text="거치기간: 7일" />
                <Text text="이자율: 7%" />
              </div>
              <Button
                onClick={onModal}
                label="가입"
                value="가입"
                className={convertClassNameList(
                  'primary xsmall',
                  styles['deposit-product__item'],
                )}
              />
            </>
          ))}
      </div>
    </div>
  );
};

export default DepositProduct;
