import { Button, Text } from '@/components/atoms';
import './MainAuctionDescription.module.scss';

const MainAuctionDescription = ({ data }: any) => {
  console.log(data);
  return (
    <>
      <Text className="text-lg" text={data.title} />
      <br />
      <Text className="text-sm" text={data.user} />
      <br />
      <Text text={data.content} />
      <br />
      <Button className="small primary" label="사러가기" />
    </>
  );
};

export default MainAuctionDescription;
