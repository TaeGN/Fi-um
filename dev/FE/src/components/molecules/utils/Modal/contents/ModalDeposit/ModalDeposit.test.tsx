import ModalDeposit from './ModalDeposit';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('ModalDeposit 컴포넌트', () => {
  test.skip('컴포넌트 렌더링 테스트', () => {
    render(<ModalDeposit />);
    userEvent.setup();
    screen.debug();
  });
});
