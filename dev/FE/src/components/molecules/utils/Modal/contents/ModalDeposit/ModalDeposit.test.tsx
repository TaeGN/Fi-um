import ModalDeposit from './ModalDeposit';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MyDeposit } from '@/types';

const deposit: MyDeposit = {
  bankName: '신한은행',
  productType: '입출금',
  interestRate: 1000,
  primeInterestRate: 1,
  savingBalance: 1,
};

describe('ModalDeposit 컴포넌트', () => {
  test.skip('컴포넌트 렌더링 테스트', () => {
    render(
      <ModalDeposit
        point={10}
        deposit={deposit}
        label=""
        onClick={() => {}}
        toggle={() => {}}
      />,
    );
    userEvent.setup();
    screen.debug();
  });
});
