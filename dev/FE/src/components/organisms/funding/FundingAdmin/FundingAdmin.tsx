import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingAdmin.module.scss';

interface FundingAdminProps {
  className?: string;
}

const FundingAdmin = ({ className }: FundingAdminProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      FundingAdmin
    </div>
  );
};

export default FundingAdmin;
