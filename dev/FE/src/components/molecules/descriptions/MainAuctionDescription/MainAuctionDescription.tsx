import { Button, Text } from '@/components/atoms';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './MainAuctionDescription.module.scss';
import { convertClassName, convertClassNameList } from '@/utils';

<<<<<<< HEAD
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
=======
const MainAuctionDescription = ({ className, data }: any) => {
  console.log(data);
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['main-auction-description'],
      )}
>>>>>>> af71c610cf7c14d63ff6ae17c11853fb357b9748
    >
      <Text className="text-xl" text={data.title} />

      <Text className="text-sm" text={data.user} />

      <Text text={data.content} />

      <Button className="primary" label="사러가기" />
    </div>
  );
};

export default MainAuctionDescription;
