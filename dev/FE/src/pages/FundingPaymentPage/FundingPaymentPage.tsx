import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPaymentPage.module.scss';
import { FundingInfo, FundingPayment } from '@/components/organisms';

interface FundingPaymentPageProps {
  className?: string;
}

const FundingPaymentPage = ({
  className,
}: FundingPaymentPageProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        'flex-container',
        'jc-space-between',
      )}
    >
      <FundingInfo />
      <FundingPayment />
    </div>
  );
};

export default FundingPaymentPage;
