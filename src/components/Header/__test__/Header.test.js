import { render, screen } from '@testing-library/react'
;
import Header from '../Header';
;

it('should render same text passed into prop', async () => {
  render(<Header title="my header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});