import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ProfileHeader.module.scss';
import {
  ProfileAdmin,
  ProfileAsset,
  ProfileCard,
  ProfileDonator,
} from '@/components/molecules';
import { UserInfo } from '@/types';
import { USER_TYPE } from '@/constants';

interface ProfileHeaderProps {
  className?: string;
  userInfo?: UserInfo;
}

const ProfileHeader = ({
  className,
  userInfo,
}: ProfileHeaderProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['profile-header'],
      )}
    >
      <div className="flex-container">
        <ProfileCard
          src={userInfo?.imagePath ?? '/vite.svg'}
          alt={userInfo?.userName ?? '기본 이미지'}
          text={userInfo?.userName ?? '기본 이미지'}
        />
        {userInfo?.userType === USER_TYPE.아이들 ? (
          <ProfileAsset userNo={userInfo.userNo} />
        ) : userInfo?.userType === USER_TYPE.원장쌤 ? (
          <ProfileAdmin />
        ) : userInfo?.userType === USER_TYPE.후원자 ? (
          <ProfileDonator />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
