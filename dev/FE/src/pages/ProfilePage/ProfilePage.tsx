import styles from './ProfilePage.module.scss';
import { ProfileHeader } from '@/components/organisms';
import { convertClassName, convertClassNameList } from '@/utils';
import { Image } from '@/components/atoms';
import useAuth from '@/hooks/useAuth';
import { useMemo } from 'react';
import { USER_TYPE } from '@/constants';
import { getSponsorShipRecordDetailQuery } from '@/api/queries/sponsor';
import { ChildProfile, Purchase, SponsorshipDetail } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { getAuctionPurchaseQuery } from '@/api/queries/auction';
import { getFollowingQuery } from '@/api/queries/follow';

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

const SponsorProfilePage = () => {
  const { data: sponsorshipDetails } = useQuery<SponsorshipDetail[]>(
    getSponsorShipRecordDetailQuery(),
  );

  const { data: auctionPurchases } = useQuery<Purchase[]>(
    getAuctionPurchaseQuery(),
  );

  const { data: childProfiles } = useQuery<ChildProfile[]>(getFollowingQuery());

  console.log(sponsorshipDetails);
  console.log(auctionPurchases);
  console.log(childProfiles);

  return (
    <>
      {/* <Table data={sponsorshipDetails} /> */}
      {auctionPurchases?.map(({ actionNo, imagePath, title }) => (
        <Image key={title + actionNo} src={imagePath} alt={title} />
      ))}
    </>
  );
};

const ChildProfilePage = () => {
  return <></>;
};

const AdminProfilePage = () => {
  return <></>;
};

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
  const { userInfo } = useAuth();

  const profile = useMemo(() => {
    if (!userInfo) return undefined;
    switch (userInfo?.userType) {
      case USER_TYPE.아이들:
        return <ChildProfilePage />;
      case USER_TYPE.원장쌤:
        return <AdminProfilePage />;
      case USER_TYPE.후원자:
        return <SponsorProfilePage />;
      default:
        return undefined;
    }
  }, [userInfo]);

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['profile-page'],
      )}
    >
      <ProfileHeader userInfo={userInfo} />
      {/* <UserList totalCapitals={data} />
      <Swiper className={convertClassNameList(styles['profile-page__swiper'])}>
        {imageData}
      </Swiper>
      <FundingAdmin /> */}
      {profile}
    </div>
  );
};

export default ProfilePage;
