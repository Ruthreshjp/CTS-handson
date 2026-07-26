import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page content', () => {
  render(<App />);
  expect(screen.getByText(/welcome to trainers app/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /trainers/i })).toBeInTheDocument();
});

test('renders trainer details for an existing trainer', () => {
  window.history.pushState({}, '', '/trainer/1');
  render(<App />);
  expect(screen.getByText(/trainer details/i)).toBeInTheDocument();
  expect(screen.getByText(/john doe/i)).toBeInTheDocument();
});
