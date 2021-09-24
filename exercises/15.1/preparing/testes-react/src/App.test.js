import { render, screen } from '@testing-library/react';
import App from './App';

test('Acha input com label Email', () => {
  const { getByLabelText } = render(<App />);
  const linkElement = getByLabelText('Email');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.type).toBe('email')
});

test('Testando byRole', () => {
  const { getAllByRole } = render(<App />);
  const button = getAllByRole('button');
  expect(button.length).toBe(2);
})

test('Testando data-testid', () => {
  const { getByTestId } = render(<App />);
  const sendBtn = getByTestId('btn-send');
  const backBtn = getByTestId('btn-back');

  expect(backBtn).toBeInTheDocument();
  expect(sendBtn).toBeInTheDocument();
})