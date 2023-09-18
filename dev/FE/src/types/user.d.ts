import { PointRecord, Stock } from '.';

interface User {
  userId: string;
  password: string;
}

interface UserDetail extends User {
  userId: string;
  password2: string;
  userName: string;
  phoneNumber: string;
}

export type UserKeyType = keyof UserDetail;

interface TotalCapital {
  userName: string;
  point: number;
  stockMoney: number;
  depositMoney: number;
  fundingMoney: number;
  solvingRate: string;
  pointRecord: PointRecord[];
  stockList: Stock[];
}

interface Capital {
  userNo: number;
  userName: string;
  point: number;
  stock: number;
  stockIncome: number;
  deposit: number;
  depositIncome: number;
  saving: number;
  savingIncome: number;
  auctionIncome: number;
  quizIncome: number;
  donation: number;
}

interface PointRecord {
  useType: '주식' | '예금';
  pointChange: number;
}

interface UserInfo {
  userNo: number;
  userName: string;
  userId: string;
  userType: UserType;
  joinDate: number;
  imagePath: string;
  phoneNumber: string;
  point: number;
  isPrimed1: boolean;
  isPrimed2: boolean;
  tokenResponse: { accessToken: string; refreshToken: string };
}

type UserType = 1 | 2 | 3;

export type {
  User,
  UserDetail,
  TotalCapital,
  PointRecord,
  UserInfo,
  UserType,
  Capital,
};
