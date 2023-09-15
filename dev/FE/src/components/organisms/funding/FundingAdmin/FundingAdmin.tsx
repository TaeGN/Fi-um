import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingAdmin.module.scss';
import { FundingItem } from '../..';
import { Table } from '@/components/atoms';

interface FundingAdminProps {
  className?: string;
}

const FundingAdmin = ({ className }: FundingAdminProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        'flex-container jc-center',
      )}
    >
      <div>
        <FundingItem />
        <FundingItem />
        <FundingItem />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default FundingAdmin;
