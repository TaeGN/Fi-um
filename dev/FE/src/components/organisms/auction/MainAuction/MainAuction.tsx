import { MainAuctionDescription } from '@/components/molecules';
import './MainAuction.module.scss';

const MainAuction = () => {
  const ddd = {
    title: '개쩌는 그림',
    user: '개쩌는 유저',
    content: '개쩌는 내용',
  };
  return <MainAuctionDescription data={ddd} />;
};

export default MainAuction;
