import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ProfileDonator.module.scss';
import { Text } from '@/components/atoms';
import { useQuery } from '@tanstack/react-query';
import { ChildProfile, Purchase, SponsorProfile } from '@/types';
import { getUserQuery } from '@/api/queries/user';
import { useMemo } from 'react';
import { getAuctionPurchaseQuery, getFollowingQuery } from '@/api/queries';

interface ProfileDonatorProps {
  className?: string;
}

const ProfileDonator = ({ className }: ProfileDonatorProps): JSX.Element => {
  const { data: sponsorProfile } = useQuery<
    SponsorProfile | ChildProfile,
    Error
  >(getUserQuery());

  const { data: auctionPurchases } = useQuery<Purchase[]>(
    getAuctionPurchaseQuery(),
  );

  const { data: childProfiles } = useQuery<ChildProfile[]>(getFollowingQuery());

  const { sponsoredAmount, cash, point } = useMemo(() => {
    return sponsorProfile
      ? (sponsorProfile as SponsorProfile)
      : { sponsoredAmount: 0, cash: 0, point: 0 };
  }, [sponsorProfile]);

  return (
    <div
      className={
        (convertClassNameList(convertClassName(className, styles)),
        'flex-container jc-space-around align-center')
      }
    >
      <div>
        <div className="flex-container">
          <Text className="text-lg" text="후원 총액 :" />
          <Text className="blue text-lg" text={sponsoredAmount} />
        </div>
        <div className="flex-container">
          <Text className="text-lg" text="내 캐시 :" />
          <Text className="blue text-lg" text={cash} />
        </div>
        <div className="flex-container">
          <Text className="text-lg" text="내 포인트 :" />
          <Text className="blue text-lg" text={point} />
        </div>
      </div>
      <div>
        <Text
          className="text-lg"
          text={`구매한 그림 : ${auctionPurchases?.length ?? 0} 개`}
        />
        <Text
          className="text-lg"
          text={`팔로우한 아이들 : ${childProfiles?.length ?? 0} 명`}
        />
      </div>
    </div>
  );
};

export default ProfileDonator;
