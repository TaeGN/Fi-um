import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPage.module.scss';
import { FundingItem, Ranking } from '@/components/organisms';

interface FundingPageProps {
  className?: string;
}

const FundingPage = ({ className }: FundingPageProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <Ranking />
      <FundingItem />
    </div>
  );
};

export default FundingPage;
