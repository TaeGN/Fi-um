import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPaymentPage.module.scss';
import { FundingInfo } from '@/components/organisms';

interface FundingPaymentPageProps {
  className?: string;
}

const FundingPaymentPage = ({
  className,
}: FundingPaymentPageProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <FundingInfo />
    </div>
  );
};

export default FundingPaymentPage;
