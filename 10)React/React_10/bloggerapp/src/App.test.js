import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('shows and hides the details sections', async () => {
  render(<App />);

  expect(screen.getByText(/welcome to blogger app/i)).toBeInTheDocument();
  expect(screen.queryByText(/Book Name:/i)).not.toBeInTheDocument();

  const bookButton = screen.getByRole('button', { name: /show\/hide book details/i });
  await userEvent.click(bookButton);

  expect(screen.getByText(/Book Name:/i)).toBeInTheDocument();

  await userEvent.click(bookButton);
  expect(screen.queryByText(/Book Name:/i)).not.toBeInTheDocument();
});
