import { convertClassName, convertClassNameList, priceFilter } from '@/utils';
import styles from './UserList.module.scss';
import { TotalCapital } from '@/types';
import { Button, Table } from '@/components/atoms';
import { memo } from 'react';

interface UserListProps {
  className?: string;
  totalCapitals?: TotalCapital[];
  onClick: (userNo: number) => void;
}

const UserList = ({
  className,
  totalCapitals,
  onClick,
}: UserListProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['user-list'],
      )}
    >
      <Table
        className={styles['user-list__table']}
        data={
          totalCapitals &&
          totalCapitals.map(
            ({
              point,
              depositMoney,
              fundingMoney,
              stockMoney,
              userName,
              userNo,
            }) => {
              return {
                이름: <div key={userNo}>{userName}</div>,
                포인트: priceFilter(point),
                펀딩: priceFilter(fundingMoney),
                주식: priceFilter(stockMoney),
                예적금: priceFilter(depositMoney),
                차트: (
                  <Button label="차트 보기" onClick={() => onClick(userNo)} />
                ),
              };
            },
          )
        }
        size={5}
      />
    </div>
  );
};

const propsAreEqual: (
  prevProps: Readonly<UserListProps>,
  nextProps: Readonly<UserListProps>,
) => boolean = (prevProps, nextProps) => {
  if (prevProps.totalCapitals === nextProps.totalCapitals) return true;
  return false;
};

export default memo(UserList, propsAreEqual);
