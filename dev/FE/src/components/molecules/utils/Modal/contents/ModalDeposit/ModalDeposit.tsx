import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ModalDeposit.module.scss';

interface ModalDepositProps {
  className?: string;
  label: string;
  onClick: () => void;
  toggle: () => void;
}

const ModalDeposit = ({
  className,
  label,
  onClick,
  toggle,
}: ModalDepositProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['modal-deposit'],
      )}
    >
      {label} 모달
    </div>
  );
};

export default ModalDeposit;
