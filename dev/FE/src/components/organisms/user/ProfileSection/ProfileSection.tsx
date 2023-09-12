import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ProfileSection.module.scss';

interface ProfileSectionProps {
  className?: string;
}

const ProfileSection = ({ className }: ProfileSectionProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      ProfileSection
    </div>
  );
};

export default ProfileSection;
