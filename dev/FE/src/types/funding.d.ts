interface Funding {
  itemName: string;
  imagePath: string;
  itemUnitPrice: number;
  itemCount: number;
  fundingAmount: number;
}

interface FundingProgress {
  totalFundingPrice: number;
  fundingPrice: number;
}

export type { Funding, FundingProgress };
