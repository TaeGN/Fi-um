import { ProfileAsset } from '@/components/molecules';
import styles from './ProfilePage.module.scss';
import { UserList } from '@/components/organisms';
import { convertClassName, convertClassNameList } from '@/utils';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
  const data = [];
  for (let index = 1; index <= 5; index++) {
    data.push({
      userName: '홍길동' + index,
      point: 1,
      stockMoney: 1,
      depositMoney: 1,
      fundingMoney: 1,
      solvingRate: 'string',
      pointRecord: [],
      stockList: [],
    });
  }

  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <ProfileAsset />
      <UserList totalCapitals={data} />
    </div>
  );
};

export default ProfilePage;
