import { BankLogo, Button, Text } from '@/components/atoms';
import styles from './DepositProduct.module.scss';
import { convertClassName, convertClassNameList, priceFilter } from '@/utils';
import { useMemo } from 'react';
import { MyDeposit } from '@/types';
import { LabelType } from '@/pages/DepositPage/DepositPage';

interface DepositProductProps {
  className?: string;
  deposit: MyDeposit;
  onModal: (label: LabelType, deposit: MyDeposit) => void;
}

const DepositProduct = ({
  className,
  deposit,
  onModal,
}: DepositProductProps) => {
  const { bankLogoClassName } = useMemo(() => {
    let bankLogoClassName = undefined;
    switch (deposit.bankName) {
      case '신한은행':
        bankLogoClassName = 'shinhan normal';
        break;
      case '국민은행':
        bankLogoClassName = 'kb normal';
        break;
      case '하나은행':
        bankLogoClassName = 'hana normal';
        break;
      default:
        bankLogoClassName = 'hana normal';
        break;
    }
    return {
      bankLogoClassName,
    };
  }, [deposit.bankName]);

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
        <Text text={`${deposit.bankName} ${deposit.productType}`} />
        <Text text={priceFilter(deposit.savingBalance)} />
      </div>
      <div className={styles.buttons}>
        {deposit.productType == '예금' && (
          <>
            <Button
              onClick={() => onModal('입금', deposit)}
              label="입금"
              value="입금"
              className={convertClassNameList(
                'primary xsmall',
                styles['deposit-product__item'],
              )}
            />
            <Button
              onClick={() => onModal('출금', deposit)}
              label="출금"
              value="출금"
              className={convertClassNameList(
                'gray xsmall',
                styles['deposit-product__item'],
              )}
            />
          </>
        )}
        {deposit.productType == '적금' &&
          (deposit.savingBalance > 0 ? (
            <>
              <div
                className={convertClassNameList(
                  styles['deposit-product__item'],
                )}
              >
                <Text text="거치기간: 7일" />
                <Text
                  text={`이자율: ${deposit.interestRate}% ~ ${
                    deposit.interestRate + deposit.primeInterestRate
                  }%`}
                />
              </div>
              <Button
                onClick={() => onModal('해지', deposit)}
                label="해지"
                value="해지"
                className={convertClassNameList(
                  'bg-red xsmall',
                  styles['deposit-product__item'],
                )}
              />
            </>
          ) : (
            <>
              <div
                className={convertClassNameList(
                  styles['deposit-product__item'],
                )}
              >
                <Text text="거치기간: 7일" />
                <Text
                  text={`이자율: ${deposit.interestRate}% ~ ${
                    deposit.interestRate + deposit.primeInterestRate
                  }%`}
                />
              </div>
              <Button
                onClick={() => onModal('가입', deposit)}
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
