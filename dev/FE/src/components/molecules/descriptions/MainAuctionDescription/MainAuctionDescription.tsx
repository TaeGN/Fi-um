import { Button, Text } from '@/components/atoms';
import styles from './MainAuctionDescription.module.scss';
import { convertClassName, convertClassNameList } from '@/utils';

const MainAuctionDescription = ({ className, data }: any) => {
  console.log(data);
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['main-auction-description'],
      )}
    >
      <Text className="text-xl" text={data.title} />
      <br />
      <Text className="text-sm" text={data.user} />
      <br />
      <Text text={data.content} />
      <br />
      <Button className="primary" label="사러가기" />
    </div>
  );
};

export default MainAuctionDescription;
