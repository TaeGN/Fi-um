import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPage.module.scss';
import { FundingItem } from '@/components/organisms';
import { Modal } from '@/components/molecules';

interface FundingPageProps {
  className?: string;
}

const FundingPage = ({ className }: FundingPageProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <FundingItem />
      <Modal className="" label="매도" onClick={null} />
      <Modal className="" label="매수" onClick={null} />
    </div>
  );
};

export default FundingPage;
