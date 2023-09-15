interface Auction {
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

export type { Auction, Purchase };
