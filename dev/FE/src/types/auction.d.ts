interface Auction {
  auctionNo: number;
  auctionPrice: number;
  content: string;
  createdTime: number;
  instantPrice: number;
  itemImagePath: string;
  likeCount: number;
  name: string;
  title: string;
  userImagePath: string | null;
  userNo: number;
  viewCount: number;
  winner: number | null;
}

interface Purchase {
  actionNo: number;
  imagePath: string;
  title: string;
}

interface NewAuction {
  title: string;
  instantPrice: number;
  content: string;
  imagePath: string;
}

export type { Auction, Purchase, NewAuction };
