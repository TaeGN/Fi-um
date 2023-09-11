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
      <Image
        className={convertClassNameList(styles['gallery-detail__image'])}
        src="/vite.svg"
        alt="vite"
      />
      <div className={convertClassNameList(styles['gallery-detail__content'])}>
        <Text
          className={convertClassNameList(
            styles['gallery-detail__content--title'],
          )}
          text="title"
        />
        <Text
          className={convertClassNameList(
            styles['gallery-detail__content--description'],
          )}
          text="description"
        />
        <Comment />
      </div>
    </div>
  );
};

export default GalleryDetail;
