import { render, screen } from '@testing-library/react'
;
import Header from '../Header';
;

it('should render same text passed into prop', async () => {
  render(<Header title="my header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into sprop', async () => {
//   render(<Header title="my header" />);
//   const headingElement = screen.getByRole("heading", {name: "My header"});
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into titleprop', async () => {
//   render(<Header title="my header" />);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into idprop', async () => {
//   render(<Header title="my header" />);
//   const headingElement = screen.getByTestId("header-2");
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into findbyprop', async () => {
//   render(<Header title="my header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into queryfindbyprop', async () => {
//   render(<Header title="my header" />);
//   const headingElement = screen.queryby(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// it('should render same text passed into getallby role', async () => {
//   render(<Header title="my header" />);
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2);
// });