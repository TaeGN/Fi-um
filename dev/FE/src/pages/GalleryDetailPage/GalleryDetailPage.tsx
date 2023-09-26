import { convertClassName, convertClassNameList } from '@/utils';
import styles from './GalleryDetailPage.module.scss';
import { GalleryDetail } from '@/components/organisms';
import { useLocation } from 'react-router-dom';

interface GalleryDetailPageProps {
  className?: string;
}

const GalleryDetailPage = ({
  className,
}: GalleryDetailPageProps): JSX.Element => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['gallery-detail-page'],
      )}
    >
      <GalleryDetail review={state} />
    </div>
  );
};

export default GalleryDetailPage;
