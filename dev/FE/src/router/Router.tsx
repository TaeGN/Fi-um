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
  SignUpPage,
  StockDetailPage,
  StockPage,
} from '@/pages';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
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
    </BrowserRouter>
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
