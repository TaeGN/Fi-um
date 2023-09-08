import { render, screen } from '@testing-library/react';
import SmallText from './SmallText';

describe('SmallText', () => {
  it('SmallText Render', () => {
    render(<SmallText text="SmallText" />);
    screen.debug();
  });
});
