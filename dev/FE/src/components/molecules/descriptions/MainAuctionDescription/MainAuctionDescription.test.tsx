import { render, screen } from '@testing-library/react';
import MainAuctionDescription from './MainAuctionDescription';

describe('MainAuctionDescription', () => {
  it('MainAuctionDescription Render', () => {
    render(<MainAuctionDescription />);
    screen.debug();
  });
});
