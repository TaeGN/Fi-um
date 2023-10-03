interface Stock {
  searchNo: number;
  stockNo: number;
  stockName: string;
  nowPrice: number;
  fluctuationPrice: number;
}

interface MyStock {
  stockNo: number;
  stockName: string;
  stockCount: number;
  stockUnitPrice: number;
  stockNowPrice: number;
}

interface StockDetail {
  stockName: string;
  stockCount: number;
  stockAverage: number;
  nowPrice: number;
}

interface StockRanking {
  userName: string | null;
  imagePath: string | null;
  stockList: MyStock[] | null;
}

interface StockMyAccount {
  point: number;
  stockCount: number;
  stockAverage: number;
}

interface StockAccount {
  stockNo: number;
  price: number;
  count: number;
}

interface News {
  newsNo: number;
  newsTitle: string;
  newsContent: string;
  searchNo: number;
  stockNo: number;
  stockName: string;
}

interface TradeHistory {
  stockCount: number;
  tradeTime: number;
}

interface PortfolioKeys {
  고양이: number;
  공룡: number;
  마법쿠키: number;
  스피드킹: number;
  해적선: number;
}

interface Portfoilo {
  moneyBalance: PortfolioKeys;
  ratioBalance: PortfolioKeys;
}

export type {
  Stock,
  StockRanking,
  MyStock,
  StockMyAccount,
  StockDetail,
  StockAccount,
  News,
  TradeHistory,
  Portfoilo,
};
