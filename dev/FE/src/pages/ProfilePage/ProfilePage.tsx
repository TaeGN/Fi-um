import { Swiper } from '@/components/molecules';
import styles from './ProfilePage.module.scss';
import { FundingAdmin, ProfileHeader, UserList } from '@/components/organisms';
import { convertClassName, convertClassNameList } from '@/utils';
import { Image } from '@/components/atoms';
import useAuth from '@/hooks/useAuth';

interface ProfilePageProps {
  className?: string;
}

// dummy
const data: any = [];
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

const imageData: any = [];
for (let index = 1; index <= 5; index++) {
  imageData.push(
    ...[
      <Image
        key={index * 3 + 0}
        className={convertClassNameList(styles['profile-page__swiper--image'])}
        src="/img/bankicon/hana.svg"
        alt="하나"
      />,
      <Image
        key={index * 3 + 1}
        className={convertClassNameList(styles['profile-page__swiper--image'])}
        src="/img/bankicon/kb.svg"
        alt="국민"
      />,
      <Image
        key={index * 3 + 2}
        className={convertClassNameList(styles['profile-page__swiper--image'])}
        src="/img/bankicon/shinhan.svg"
        alt="신한"
      />,
    ],
  );
}

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
  const { userInfo } = useAuth();

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['profile-page'],
      )}
    >
      <ProfileHeader userInfo={userInfo} />
      <UserList totalCapitals={data} />
      <Swiper className={convertClassNameList(styles['profile-page__swiper'])}>
        {imageData}
      </Swiper>
      <FundingAdmin />
    </div>
  );
};

export default ProfilePage;
