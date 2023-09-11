import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verifica se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email:');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verifica se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verifica se existe um botão enviar na tela', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
});

test('Verifica se existe um botão voltar na tela', () => {
  render(<App />);
  const btnBack = screen.getByRole('button', { name: 'Voltar' });
  expect(btnBack).toBeInTheDocument();
});

test('Verifica se o campo "email" e o botão "enviar" funcionam corretamente.', async () => {
  render(<App />);

  const inputEmail = screen.getByLabelText('Email:');
  const btnSend = screen.getByTestId('id-send');
  const title = screen.getByRole('heading', { name: 'Valor:' });
  const EMAIL_USER = 'email@email.com';

  await userEvent.type(inputEmail, EMAIL_USER);
  await userEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(title).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});
