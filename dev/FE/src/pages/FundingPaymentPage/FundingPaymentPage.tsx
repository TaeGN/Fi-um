import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPaymentPage.module.scss';

interface FundingPaymentPageProps {
  className?: string;
}

const FundingPaymentPage = ({
  className,
}: FundingPaymentPageProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      FundingPaymentPage
    </div>
  );
};

export default FundingPaymentPage;
