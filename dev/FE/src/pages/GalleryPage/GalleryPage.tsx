import { convertClassName, convertClassNameList } from '@/utils';
import styles from './GalleryPage.module.scss';

interface GalleryPageProps {
  className?: string;
}

const GalleryPage = ({ className }: GalleryPageProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      GalleryPage
    </div>
  );
};

export default GalleryPage;
