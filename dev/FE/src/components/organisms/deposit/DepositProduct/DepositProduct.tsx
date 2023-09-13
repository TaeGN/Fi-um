import { BankLogo, Button, Text } from '@/components/atoms';
import styles from './DepositProduct.module.scss';
import { convertClassName, formatCurrency } from '@/utils';
import { Modal, ModalDeposit } from '@/components/molecules';
import useModal from '@/hooks/useModal';
import { useState, useCallback, MouseEvent } from 'react';

interface DepositProductProps {
  status: number;
  bankLogoClassName: string;
  className?: string;
  title: string;
}

export type LabelType = '입금' | '출금' | '가입';

const DepositProduct = ({
  status,
  bankLogoClassName,
  className,
  title,
}: DepositProductProps) => {
  const { isOpen, toggle } = useModal();
  const [label, setLabel] = useState<LabelType>('입금');

  const onModal = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setLabel(e.currentTarget.value as LabelType);
    toggle();
  }, []);

  return (
    <div
      className={`${styles.depositProduct} ${convertClassName(
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
        {status === 1 && (
          <>
            <Button
              onClick={onModal}
              label="입금"
              value="입금"
              className="primary xsmall"
            />
            <Button
              onClick={onModal}
              label="출금"
              value="출금"
              className="gray xsmall"
            />
          </>
        )}
        {status === 2 && (
          <>
            <Text text="만기일 : 2023. 09. 15" />
          </>
        )}
        {status === 3 && (
          <>
            <div>
              <Text text="거치기간: 7일" />
              <Text text="이자율: 7%" />
            </div>
            <Button
              onClick={onModal}
              label="가입"
              value="가입"
              className="primary xsmall"
            />
          </>
        )}
      </div>

      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalDeposit
          className={className}
          label={label}
          onClick={() => console.log('구매!!!!')}
          toggle={toggle}
        />
      </Modal>
    </div>
  );
};

export default DepositProduct;
