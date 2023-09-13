import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ProfileHeader.module.scss';
import {
  ProfileAdmin,
  ProfileAsset,
  ProfileCard,
  ProfileDonator,
} from '@/components/molecules';

interface ProfileHeaderProps {
  className?: string;
}

const ProfileHeader = ({ className }: ProfileHeaderProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <div className="flex-container">
        <ProfileCard src="" alt="a" text="승우짱123" />
        <ProfileAsset />
      </div>
      <div className="flex-container">
        <ProfileCard src="" alt="a" text="승우짱123" />
        <ProfileAdmin />
      </div>
      <div className="flex-container">
        <ProfileCard src="" alt="a" text="승우짱123" />
        <ProfileDonator />
      </div>
    </div>
  );
};

export default ProfileHeader;
