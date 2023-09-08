import { render, screen } from '@testing-library/react';
import TableTitle from './TableTitle';

describe('TableTitle', () => {
  test('TableTitle Render', () => {
    render(<TableTitle arr="TableTitle" />);
    screen.debug();
  });
});
