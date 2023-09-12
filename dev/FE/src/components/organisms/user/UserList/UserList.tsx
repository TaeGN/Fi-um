import { convertClassName, convertClassNameList } from '@/utils';
import styles from './UserList.module.scss';
import { TotalCapital } from '@/types';

interface UserListProps {
  className?: string;
  totalCapitals: TotalCapital[];
}

const UserList = ({ className, totalCapitals }: UserListProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      {totalCapitals.map((totalCapital) => (
        <div
          key={totalCapital.userName}
          className={convertClassNameList(styles['total-capital'])}
        >
          <span className={convertClassNameList(styles['total-capital__item'])}>
            {totalCapital.userName}
          </span>
          <span className={convertClassNameList(styles['total-capital__item'])}>
            {totalCapital.point}
          </span>
          <span className={convertClassNameList(styles['total-capital__item'])}>
            {totalCapital.stockMoney}
          </span>
          <span className={convertClassNameList(styles['total-capital__item'])}>
            {totalCapital.depositMoney}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
