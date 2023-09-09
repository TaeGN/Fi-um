import FundingCard from './FundingCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const renderFundingCard = () => {
  render(<FundingCard />);

  const fundingCard = screen.getByTestId('funding-card');
  return { fundingCard };
};

describe('Funding Card 컴포넌트', () => {
  test('컴포넌트 렌더링 테스트', () => {
    renderFundingCard();
  });

  test('컴포넌트 내부에 Image, Text, BarChart 유무 확인', () => {
    renderFundingCard();

    screen.getByTestId('bar-chart');
    screen.getByTestId('text');
    screen.getByTestId('image');
  });
});