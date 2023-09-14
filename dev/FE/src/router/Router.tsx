import {
  AuctionDetailPage,
  AuctionPage,
  CreatePage,
  DepositPage,
  FundingPage,
  FundingPaymentPage,
  GalleryDetailPage,
  GalleryPage,
  LoginPage,
  MainPage,
  ProfilePage,
  StockDetailPage,
  StockPage,
} from '@/pages';
import { Route, Routes, Outlet } from 'react-router-dom';

const Router = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<LoginPage signUp />} />
          <Route path="stock" element={<StockPage />} />
          <Route path="stock/:detail" element={<StockDetailPage />} />
          <Route path="auction" element={<AuctionPage />} />
          <Route path="auction/:detail" element={<AuctionDetailPage />} />
          <Route path="auction/create" element={<CreatePage />} />
          <Route path="deposit" element={<DepositPage />} />
          <Route path="funding" element={<FundingPage />} />
          <Route path="fundingpayment" element={<FundingPaymentPage />} />
          <Route path="profile/:user" element={<ProfilePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery/:detail" element={<GalleryDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
