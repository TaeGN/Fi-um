import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingInfo.module.scss';

interface FundingInfoProps {
  className?: string;
}

const FundingInfo = ({ className }: FundingInfoProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      FundingInfo
    </div>
  );
};

export default FundingInfo;
