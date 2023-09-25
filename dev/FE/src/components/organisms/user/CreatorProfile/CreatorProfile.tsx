import { convertClassName, convertClassNameList } from '@/utils';
import styles from './CreatorProfile.module.scss';
import { ProfileCard } from '@/components/molecules';
import { Image, Text } from '@/components/atoms';
import { Art } from '@/types';

interface CreatorProfileProps {
  className?: string;
  arts?: Art[];
}

const CreatorProfile = ({
  className,
  arts,
}: CreatorProfileProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <ProfileCard />
      <Text className="text-lg" text="이 작가의 다른 작품" />
      <div className="card-container">
        {arts?.map((art) => (
          <div>
            <Image src={art.imagePath} />
            <Text text={art.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorProfile;
