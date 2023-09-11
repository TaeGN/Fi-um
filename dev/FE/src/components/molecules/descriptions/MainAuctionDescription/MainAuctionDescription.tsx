import { Button, Text } from '@/components/atoms';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './MainAuctionDescription.module.scss';

interface MainAuctionDescriptionProps {
  className?: string;
  data?: any;
}

const MainAuctionDescription = ({
  className,
  data,
}: MainAuctionDescriptionProps): JSX.Element => {
  return (
    <div
      className={
        (convertClassNameList(convertClassName(className, styles)),
        styles['main-auction-description'])
      }
    >
      <Text className="text-xl" text={data.title} />

      <Text className="text-sm" text={data.user} />

      <Text text={data.content} />

      <Button className="primary" label="사러가기" />
    </div>
  );
};

export default MainAuctionDescription;
