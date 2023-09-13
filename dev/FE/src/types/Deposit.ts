interface Deposit {
  bankName: '신한' | '국민' | '하나';
  productType: '입출금' | '예금' | '적금';
  interestRate: number;
  primeInterestRate: number;
  savingBalance: number;
}

export type { Deposit };
