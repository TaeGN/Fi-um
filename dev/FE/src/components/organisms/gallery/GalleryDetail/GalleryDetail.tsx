import { convertClassName, convertClassNameList } from '@/utils';
import styles from './GalleryDetail.module.scss';
import { Image, Text } from '@/components/atoms';
import { Comment } from '@/components/molecules';

interface GalleryDetailProps {
  className?: string;
}

const GalleryDetail = ({ className }: GalleryDetailProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['gallery-detail'],
      )}
    >
      <div className={styles.imageWrapper}>
        <Image
          className={convertClassNameList(styles['gallery-detail__image'])}
          src="/img/dummy.jpg"
          alt="vite"
        />
      </div>
      <div className={convertClassNameList(styles['gallery-detail__content'])}>
        <Text
          className={convertClassNameList(
            styles['gallery-detail__content--title'],
            'text-xxl',
          )}
          text="아스날 챔스우승"
        />
        <Text
          className={convertClassNameList(
            styles['gallery-detail__content--description'],
          )}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maxime? Vel earum quas perferendis, corrupti accusantium saepe atque architecto, aperiam eligendi culpa commodi labore! Dolorum laudantium porro nam placeat saepe."
        />
        <Comment
          className={convertClassNameList(styles['gallery-detail__comment'])}
        />
      </div>
    </div>
  );
};

export default GalleryDetail;
