import { Text } from '@/components/atoms';
import styles from './RankingCard.module.scss';
import { convertClassName } from '@/utils';

interface RankingCardProps {
  no1: string;
  no2: string;
  no3: string;
  className?: string;
}

const RankingCard = ({ no1, no2, no3, className }: RankingCardProps) => {
  return (
    <div
      className={`${styles.rankingCard} ${convertClassName(className, styles)}`}
    >
      <div className={styles.title}>
        <Text text="랭킹" className="text-xl" />
      </div>
      <div className={styles.content}>
        <Text text={`1등 : ${no1}`} />
        <Text text={`2등 : ${no2}`} />
        <Text text={`3등 : ${no3}`} />
      </div>
    </div>
  );
};

export default RankingCard;
