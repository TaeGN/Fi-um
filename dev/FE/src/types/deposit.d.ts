interface MyDeposit {
  bankName: string;
  productType: '입출금' | '예금' | '적금';
  interestRate: number;
  primeInterestRate: number;
  savingBalance: number;
}

interface Deposit {
  bankNo: number;
  bankName: '신한은행' | '국민은행' | '하나은행';
  depositBalance: number;
  createDeposit: number;
  depositMoney: number;
}

interface Bank {
  bankName: string;
  productType: '입출금' | '예금' | '적금';
  interestRate: number;
  primeInterestRate: number;
}

export type { MyDeposit, Deposit, Bank };
