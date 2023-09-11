// src/App.test.tsx

import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
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