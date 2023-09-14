import { Swiper } from '@/components/molecules';
import styles from './ProfilePage.module.scss';
import { ProfileHeader, UserList } from '@/components/organisms';
import { convertClassName, convertClassNameList } from '@/utils';
import { Image } from '@/components/atoms';
import { useQuery } from '@tanstack/react-query';
import {
  getArtist,
  getArtistQuery,
  // getTotalCapital,
  getTotalCapitalQuery,
} from '@/api/user';

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
        className={convertClassNameList(styles['profile-page__swiper--image'])}
        src="/img/bankicon/hana.svg"
        alt="하나"
      />,
      <Image
        className={convertClassNameList(styles['profile-page__swiper--image'])}
        src="/img/bankicon/kb.svg"
        alt="국민"
      />,
      <Image
        className={convertClassNameList(styles['profile-page__swiper--image'])}
        src="/img/bankicon/shinhan.svg"
        alt="신한"
      />,
    ],
  );
}

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
  const query1 = useQuery(getTotalCapitalQuery);
  console.log(query1);

  const userNo = '2';
  const query2 = useQuery({
    queryKey: ['getArtist', userNo],
    queryFn: getArtist,
  });
  console.log(query2);

  const query3 = useQuery(getArtistQuery('3'));
  console.log(query3);

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['profile-page'],
      )}
    >
      <ProfileHeader />
      <UserList totalCapitals={data} />
      <Swiper className={convertClassNameList(styles['profile-page__swiper'])}>
        {imageData}
      </Swiper>
    </div>
  );
};

export default ProfilePage;
