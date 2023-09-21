import { convertClassName, convertClassNameList } from '@/utils';
import styles from './CreatorProfile.module.scss';
import { ProfileCard } from '@/components/molecules';

interface CreatorProfileProps {
  className?: string;
}

const CreatorProfile = ({ className }: CreatorProfileProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <ProfileCard />
    </div>
  );
};

export default CreatorProfile;
