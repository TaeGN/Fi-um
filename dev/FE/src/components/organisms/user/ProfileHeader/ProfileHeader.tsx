import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
  className?: string;
}

const ProfileHeader = ({ className }: ProfileHeaderProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      ProfileHeader
    </div>
  );
};

export default ProfileHeader;
