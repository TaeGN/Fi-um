import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Funding.module.scss';
import { FundingCard } from '@/components/molecules';

interface FundingProps {
  className?: string;
}

const Funding = ({ className }: FundingProps): JSX.Element => {
  return (
    <div
      className={
        (convertClassNameList(convertClassName(className, styles)),
        'card-container')
      }
    >
      <FundingCard />
      <FundingCard />
      <FundingCard />
      <FundingCard />
    </div>
  );
};

export default Funding;
