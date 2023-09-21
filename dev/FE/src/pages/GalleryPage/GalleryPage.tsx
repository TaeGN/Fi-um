import { convertClassName, convertClassNameList } from '@/utils';
import styles from './GalleryPage.module.scss';
import { Button } from '@/components/atoms';
import useAuth from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { USER_TYPE } from '@/constants';
import { useQuery } from '@tanstack/react-query';
import { Review } from '@/types';
import { getReviewsQuery } from '@/api/queries/review';
import { AuctionCard } from '@/components/molecules';
import { getReviews } from '@/api/review';

interface GalleryPageProps {
  className?: string;
}

const GalleryPage = ({ className }: GalleryPageProps): JSX.Element => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const userType = userInfo?.userType ?? 3;
  const { data: reviews } = useQuery<Review[], Error>(getReviewsQuery());

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        'flex-container-col',
      )}
    >
      {userType === USER_TYPE.원장쌤 && (
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
      <div
        className={convertClassNameList(
          styles['gallery-page__card-container'],
          'card-container',
        )}
      >
        {reviews
          ?.sort((a, b) => Number(a.createTime) - Number(b.createTime))
          .map(({ reviewNo, content, imagePath, title }) => (
            <AuctionCard
              key={reviewNo}
              itemImagePath={imagePath}
              title={title}
              content={content}
            />
          ))}
      </div>
    </div>
  );
};

export default GalleryPage;
