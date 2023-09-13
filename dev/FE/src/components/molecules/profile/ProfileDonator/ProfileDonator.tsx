import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ProfileDonator.module.scss';
import { Text } from '@/components/atoms';

interface ProfileDonatorProps {
  className?: string;
}

const ProfileDonator = ({ className }: ProfileDonatorProps): JSX.Element => {
  return (
    <div
      style={{
        width: '75%',
      }}
      className={
        (convertClassNameList(convertClassName(className, styles)),
        'flex-container jc-space-around align-center')
      }
    >
      <div>
        <div className="flex-container">
          <Text className="text-lg" text="후원 총액 :" />
          <Text className="blue text-lg" text={`${123123}`} />
        </div>
        <div className="flex-container">
          <Text className="text-lg" text="내 캐시 :" />
          <Text className="blue text-lg" text={`${123123}`} />
        </div>
        <div className="flex-container">
          <Text className="text-lg" text="내 포인트 :" />
          <Text className="blue text-lg" text={`${123123}`} />
        </div>
      </div>
      <div>
        <Text className="text-lg" text={`구매한 그림 : ${12} 개`} />
        <Text className="text-lg" text={`팔로우한 아이들 : ${1} 명`} />
      </div>
    </div>
  );
};

export default ProfileDonator;
