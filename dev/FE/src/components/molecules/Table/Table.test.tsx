import { render, screen } from '@testing-library/react';
import { Table } from '..';

describe('Text', () => {
  it('Text Render', () => {
    render(<Table />);
    screen.debug();
  });
});
