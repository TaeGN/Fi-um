import styles from './ProfilePage.module.scss';
import {
  Funding,
  ProfileHeader,
  ProfileSection,
  UserList,
} from '@/components/organisms';
import { convertClassName, convertClassNameList } from '@/utils';
import { Image, Table } from '@/components/atoms';
import useAuth from '@/hooks/useAuth';
import { useMemo } from 'react';
import { USER_TYPE } from '@/constants';
import {
  ArtistAuction,
  ChildProfile,
  Deposit,
  Funding as FundingType,
  Item,
  MyStock,
  Point,
  Purchase,
  SponsorshipDetail,
  TotalCapital,
} from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AuctionCard, ProfileCard, Swiper } from '@/components/molecules';
import {
  getAuctionPurchaseQuery,
  getFollowingQuery,
  getFundingsQuery,
  getMyFundingsQuery,
  getMyStocksQuery,
  getPointsQuery,
  getSponsorShipQuery,
  getSponsorShipRecordDetailQuery,
  getSponsorShipRecordsQuery,
  getUserArtistQuery,
  getUserDepositSavingQuery,
  getUserTotalCapitalQuery,
} from '@/api/queries';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
  className?: string;
}

// 후원자 프로필
const SponsorProfilePage = () => {
  // 후원 내역
  const { data: sponsorshipDetails } = useQuery<SponsorshipDetail[]>(
    getSponsorShipRecordDetailQuery(),
  );

  // 경매 내역
  const { data: auctionPurchases } = useQuery<Purchase[]>(
    getAuctionPurchaseQuery(),
  );

  // 팔로우
  const { data: childProfiles } = useQuery<ChildProfile[]>(getFollowingQuery());

  // 포인트 사용 내역
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
  const { userNo } = useParams<string>();

  // 내 예적금
  const { data: depositSavings } = myPage
    ? useQuery<Deposit[]>(getUserDepositSavingQuery())
    : { data: undefined };

  // 내 주식
  const { data: myStocks } = myPage
    ? useQuery<MyStock[]>(getMyStocksQuery())
    : { data: undefined };

  // 내 펀딩
  const { data: myFundings } = myPage
    ? useQuery<FundingType[]>(getMyFundingsQuery())
    : { data: undefined };

  // 포인트 사용 내역
  const { data: pointRecords } = myPage
    ? useQuery<Point[]>(getPointsQuery())
    : { data: undefined };

  // 내 작품
  const { data: myAuctions } = useQuery<ArtistAuction[]>(
    getUserArtistQuery(Number(userNo)),
  );

  const auction = useMemo(() => {
    const auction: JSX.Element[] = [];
    if (myAuctions) {
      const len = myAuctions.length;
      for (let index = 0; index < len / 4; index++) {
        auction.push(
          <div className="card-container">
            {myAuctions
              .slice(index * 4, Math.min((index + 1) * 4, len))
              .map(({ actionNo, imagePath, title }) => (
                <AuctionCard
                  key={actionNo}
                  src={imagePath}
                  alt={title}
                  title={title}
                />
              ))}
          </div>,
        );
      }
    }
    return auction;
  }, [myAuctions]);

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
            <Funding fundings={myFundings} />
          </ProfileSection>
        </>
      )}
      <ProfileSection label="그림">
        <Swiper>{auction}</Swiper>
      </ProfileSection>
      {myPage && (
        <ProfileSection label="포인트 사용 내역">
          <Table data={pointRecords} />
        </ProfileSection>
      )}
    </>
  );
};

const AdminProfilePage = () => {
  // 아이들 전체 자산
  const { data: totalCapitals } = useQuery<TotalCapital[]>(
    getUserTotalCapitalQuery(),
  );

  // 전체 후원품
  const { data: sponsorships } = useQuery<Item[]>(getSponsorShipQuery());

  // 후원 히스토리
  const { data: sponsorshipRecords } = useQuery<SponsorshipDetail[]>(
    getSponsorShipRecordsQuery(),
  );

  // 전체 펀딩
  const { data: fundings } = useQuery<FundingType[]>(getFundingsQuery());

  return (
    <>
      <ProfileSection label="아이들 자산 현황">
        <UserList totalCapitals={totalCapitals} />
      </ProfileSection>
      <div className="flex-container">
        <ProfileSection label="후원품 목록">
          <Funding fundings={sponsorships} />
        </ProfileSection>
        <ProfileSection label="후원 히스토리">
          <Table data={sponsorshipRecords} />
        </ProfileSection>
      </div>
      <div className="flex-container">
        <ProfileSection label="펀딩 목록">
          <Funding fundings={fundings} />
        </ProfileSection>
        <ProfileSection label="펀딩 히스토리"></ProfileSection>
      </div>
    </>
  );
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
