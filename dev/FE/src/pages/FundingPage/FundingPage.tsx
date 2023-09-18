import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPage.module.scss';
import { FundingItem, Ranking } from '@/components/organisms';
import { getFundingsQuery } from '@/api/queries/funding';
import { useQuery } from '@tanstack/react-query';
import { Funding } from '@/types';

interface FundingPageProps {
  className?: string;
}

const FundingPage = ({ className }: FundingPageProps): JSX.Element => {
  const { data: fundings } = useQuery<Funding[], Error>(getFundingsQuery());
  console.log(fundings);

  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <Ranking />
      {fundings?.map((funding) => (
        <div key={funding.itemNo + funding.itemName}>
          <FundingItem funding={funding} />
        </div>
      ))}
    </div>
  );
};

export default FundingPage;
