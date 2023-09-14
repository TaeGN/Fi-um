import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPayment.module.scss';

interface FundingPaymentProps {
  className?: string;
}

const FundingPayment = ({ className }: FundingPaymentProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      FundingPayment
    </div>
  );
};

export default FundingPayment;
