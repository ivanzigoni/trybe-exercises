import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test('Acha input com label Email', () => {
//   const { getByLabelText } = render(<App />);
//   const linkElement = getByLabelText('Email');
//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement.type).toBe('email')
// });

// test('Testando byRole', () => {
//   const { getAllByRole } = render(<App />);
//   const button = getAllByRole('button');
//   expect(button.length).toBe(2);
// })

// test('Testando data-testid', () => {
//   const { getByTestId } = render(<App />);
//   const sendBtn = getByTestId('btn-send');
//   const backBtn = getByTestId('btn-back');

//   expect(backBtn).toBeInTheDocument();
//   expect(sendBtn).toBeInTheDocument();
// })


test('Testando fireEvent', () => {
const { getByTestId, getByLabelText } = render(<App />);

const EMAIL_USER = 'email@email.com';

const emailText = getByTestId('id-email-user');
expect(emailText).toBeInTheDocument();
expect(emailText).toHaveTextContent('Valor:')

const btnSend = getByTestId('id-send');
const inputEmail = getByLabelText('Email')
fireEvent.change(inputEmail, { target: { value: EMAIL_USER }});
fireEvent.click(btnSend);

expect(emailText).toHaveTextContent(`Valor: ${EMAIL_USER}`);
expect(inputEmail).toHaveTextContent('');
expect(inputEmail).toHaveValue('');

})