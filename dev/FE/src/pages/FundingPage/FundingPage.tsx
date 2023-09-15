import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPage.module.scss';
import { FundingItem, Ranking } from '@/components/organisms';
import { getFundingsQuery } from '@/api/queries/funding';
import { useQuery } from '@tanstack/react-query';

interface FundingPageProps {
  className?: string;
}

const FundingPage = ({ className }: FundingPageProps): JSX.Element => {
  const { data: fundings } = useQuery(getFundingsQuery());
  console.log(fundings);

  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <Ranking />
      {fundings?.map((funding) => (
        <FundingItem
          key={funding.itemNo + funding.itemName}
          funding={funding}
        />
      ))}
    </div>
  );
};

export default FundingPage;
