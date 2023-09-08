import { render, screen } from '@testing-library/react';
import Content from './Content';

describe('Content', () => {
  it('Content Render', () => {
    render(<Content text="content" />);
    screen.debug();
    // screen.getByText(/content/i);
  });
});
