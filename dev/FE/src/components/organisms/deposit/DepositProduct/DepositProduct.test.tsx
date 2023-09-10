import DepositProduct from './DepositProduct';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('DepositProduct 컴포넌트', () => {
  test('컴포넌트 렌더링 테스트', () => {
    render(<DepositProduct />);
    userEvent.setup();
    screen.debug();
  });
});
