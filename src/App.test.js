import { render, screen } from '@testing-library/react';
import App_30 from './App_30';

test('renders learn react link', () => {
  render(<App_30 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
