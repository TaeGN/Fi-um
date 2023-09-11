import { convertClassName, convertClassNameList } from '@/utils';
import styles from './GalleryDetailPage.module.scss';
import { GalleryDetail } from '@/components/organisms';
import { useParams } from 'react-router-dom';

interface GalleryDetailPageProps {
  className?: string;
}

const GalleryDetailPage = ({
  className,
}: GalleryDetailPageProps): JSX.Element => {
  const { detail } = useParams();
  console.log(detail);

  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <GalleryDetail />
    </div>
  );
};

export default GalleryDetailPage;
