import { convertClassName, convertClassNameList } from '@/utils';
import styles from './CreatorProfile.module.scss';
import { ProfileCard } from '@/components/molecules';

interface CreatorProfileProps {
  className?: string;
}

const CreatorProfile = ({ className }: CreatorProfileProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <ProfileCard src="/vite.svg" alt="profile" text="프로필입니다." />
    </div>
  );
};

export default CreatorProfile;
