import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Funding.module.scss';

interface FundingProps {
  className?: string;
}

const Funding = ({ className }: FundingProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      Funding
    </div>
  );
};

export default Funding;
