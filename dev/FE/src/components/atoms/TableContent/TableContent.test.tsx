import { render, screen } from '@testing-library/react';
import TableContent from './TableContent';

describe('TableContent', () => {
  it('TableContent Render', () => {
    render(<TableContent arr="TableContent" />);
    screen.debug();
  });
});
