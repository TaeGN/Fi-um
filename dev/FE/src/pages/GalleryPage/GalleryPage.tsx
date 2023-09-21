import { convertClassName, convertClassNameList } from '@/utils';
import styles from './GalleryPage.module.scss';
import { Button } from '@/components/atoms';
import useAuth from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface GalleryPageProps {
  className?: string;
}

const GalleryPage = ({ className }: GalleryPageProps): JSX.Element => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const userType = userInfo?.userType ?? 3;

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        'flex-container-col',
      )}
    >
      {userType === 1 && (
        <Button
          className={convertClassNameList(
            convertClassName(className, styles),
            'self-end m-1',
            'primary xsmall',
          )}
          label="등록하기"
          onClick={() => navigate(`/create`, { state: 'gallery' })}
        />
      )}
    </div>
  );
};

export default GalleryPage;
