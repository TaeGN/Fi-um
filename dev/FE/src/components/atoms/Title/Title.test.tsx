import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title', () => {
  it('Title Render', () => {
    render(<Title text="Title" textColor="blue" />);
    screen.debug();
  });
});
