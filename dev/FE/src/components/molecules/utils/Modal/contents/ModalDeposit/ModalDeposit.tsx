import { bankIconUrl, convertClassName, convertClassNameList } from '@/utils';
import styles from './ModalDeposit.module.scss';
import { Image, Text } from '@/components/atoms';

interface ModalDepositProps {
  className?: string;
  label: string;
  onClick: () => void;
  toggle: () => void;
}

const ModalDeposit = ({ className, label }: ModalDepositProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['modal-deposit'],
      )}
    >
      <Text className="text-lg" text={label} />
      <div>
        <Image src={bankIconUrl('shinhan.svg')} alt="신한" />
      </div>
    </div>
  );
};

export default ModalDeposit;
