import { ProfileCard } from '@/components/molecules';
import styles from './Ranking.module.scss';
import { Image } from '@/components/atoms';

const Ranking = () => {
  const dummy = [
    { id: 1, name: '1번사람', src: '/img/dummy2.jpg' },
    { id: 2, name: '2번사람', src: '/img/dummy2.jpg' },
    { id: 3, name: '3번사람', src: '/img/dummy2.jpg' },
  ];
  return (
    <div className={styles.ranking}>
      {dummy.map((item) => {
        return (
          <div className={styles[`profileCard${item.id}`]}>
            {item.id === 2 ? (
              <Image src="/img/crown.svg" alt="" className={styles.crown} />
            ) : (
              ''
            )}
            <ProfileCard key={item.id} src={item.src} alt="" text={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Ranking;
