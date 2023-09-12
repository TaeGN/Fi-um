import { PointRecord, Stock } from '.';

export default interface TotalCapital {
  userName: string;
  point: number;
  stockMoney: number;
  depositMoney: number;
  fundingMoney: number;
  solvingRate: string;
  pointRecord: PointRecord[];
  stockList: Stock[];
}
