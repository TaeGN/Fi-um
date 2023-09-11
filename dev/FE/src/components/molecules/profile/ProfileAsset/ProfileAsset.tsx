import { PieChart, Text } from '@/components/atoms';
import { ProfileCard } from '../..';
import './ProfileAsset.module.scss';

const ProfileAsset = () => {
  return (
    <div className="card-container">
      <ProfileCard src="" alt="a" text="승우짱123" />
      <div>
        <Text className="text-lg center" text="내 자산" />
        <PieChart />
      </div>
      <div>
        <Text className="text-lg center" text="수익률" />
        <PieChart />
      </div>
      <div>
        <Text className="text-lg center" text="라이벌의 자산" />
        <PieChart />
      </div>
    </div>
  );
};

export default ProfileAsset;
