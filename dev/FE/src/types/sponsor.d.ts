interface Item {
  itemNo: number;
  itemName: string;
  unitPrice: number;
  itemCount: number;
  description: string;
  imagePath: string;
  sponsorshipAmount: number;
  fundingAmount: number;
  isCompleted: boolean;
  bestFunding: string;
}

interface SponsorshipDetail {
  sponsorName: string;
  itemName: string;
  price: number;
}

interface NewItem {
  itemNo?: number;
  name: string;
  unitPrice: number;
  count: number;
  description: string;
  imagePath: string;
}

export { Item, SponsorshipDetail, NewItem };
