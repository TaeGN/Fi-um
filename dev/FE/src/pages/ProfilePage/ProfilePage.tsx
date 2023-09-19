import styles from './ProfilePage.module.scss';
import { ProfileHeader, ProfileSection } from '@/components/organisms';
import { convertClassName, convertClassNameList } from '@/utils';
import { Image, Table } from '@/components/atoms';
import useAuth from '@/hooks/useAuth';
import { useMemo } from 'react';
import { USER_TYPE } from '@/constants';
import { ChildProfile, Point, Purchase, SponsorshipDetail } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { FundingCard, ProfileCard, Swiper } from '@/components/molecules';
import {
  getAuctionPurchaseQuery,
  getFollowingQuery,
  getMyFundingsQuery,
  getMyStocksQuery,
  getPointsQuery,
  getSponsorShipRecordDetailQuery,
  getUserDepositSavingQuery,
} from '@/api/queries';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
  className?: string;
}

// 후원자 프로필
const SponsorProfilePage = () => {
  const { data: sponsorshipDetails } = useQuery<SponsorshipDetail[]>(
    getSponsorShipRecordDetailQuery(),
  );

  // 경매 내역
  const { data: auctionPurchases } = useQuery<Purchase[]>(
    getAuctionPurchaseQuery(),
  );

  // 팔로우
  const { data: childProfiles } = useQuery<ChildProfile[]>(getFollowingQuery());

  const { data: pointRecords } = useQuery<Point[]>(getPointsQuery());
  console.log('sponsorshipDetails', sponsorshipDetails);
  console.log('auctionPurchases', auctionPurchases);
  console.log('childProfiles', childProfiles);
  console.log('pointRecords', pointRecords);

  return (
    <>
      <ProfileSection label="내가 구매한 그림">
        {auctionPurchases?.map(({ actionNo, imagePath, title }) => (
          <Image key={actionNo} src={imagePath} alt={title} />
        ))}
      </ProfileSection>
      <ProfileSection label="팔로우 한 아이들">
        {childProfiles?.map(({ userNo, userName, imagePath }) => (
          <ProfileCard
            key={userNo}
            src={imagePath}
            alt={userName}
            text={userName}
          />
        ))}
      </ProfileSection>
      <ProfileSection label="포인트 사용 내역">
        <Table data={pointRecords} />
      </ProfileSection>
      <ProfileSection label="나의 후원 목록">
        <Table data={sponsorshipDetails} />
      </ProfileSection>
    </>
  );
};

const ChildProfilePage = ({ myPage }: { myPage?: boolean }) => {
  const { data: depositSavings } = useQuery(getUserDepositSavingQuery());
  const { data: myStocks } = useQuery(getMyStocksQuery());
  const { data: myFundings } = useQuery(getMyFundingsQuery());

  const myFunding = useMemo(() => {
    const myFunding: JSX.Element[] = [];
    if (myFundings) {
      const len = myFunding.length;
      for (let index = 0; index < len / 4; index++) {
        myFunding.push(
          <div className="card-container">
            {myFundings
              .slice(index * 4, Math.min((index + 1) * 4, len))
              .map((funding) => (
                <FundingCard key={funding.itemNo} funding={funding} />
              ))}
          </div>,
        );
      }
    }
    return myFunding;
  }, [myFundings]);

  return (
    <>
      {myPage && (
        <>
          <ProfileSection label="자산 모아보기">
            <div className="flex-container">
              <Table data={depositSavings} />
              <Table data={myStocks} />
            </div>
          </ProfileSection>
          <ProfileSection label="내 펀딩">
            <Swiper>{myFunding}</Swiper>
          </ProfileSection>
        </>
      )}
      <ProfileSection label="그림" />
      {myPage && <ProfileSection label="포인트 사용 내역" />}
    </>
  );
};

const AdminProfilePage = () => {
  return <></>;
};

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
  const { userInfo } = useAuth();
  const { userNo } = useParams<string>();

  const profile = useMemo(() => {
    if (!userInfo) return undefined;
    switch (userInfo?.userType) {
      case USER_TYPE.아이들:
        if (userNo && userInfo.userNo === Number(userNo)) {
          return <ChildProfilePage myPage />;
        } else {
          return <ChildProfilePage />;
        }
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
