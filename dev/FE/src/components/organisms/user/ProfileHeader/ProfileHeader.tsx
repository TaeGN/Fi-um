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
  myPage: boolean;
}

const ProfileHeader = ({
  className,
  userInfo,
  myPage,
}: ProfileHeaderProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['profile-header'],
      )}
    >
      <div className="flex-container">
        <ProfileCard myPage={myPage} />
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
