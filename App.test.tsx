import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

declare const test: any;
declare const expect: any;

test('renders App and verifies DOM content', () => {
  render(<App />);

  const titleElement = screen.getByText(/EduPath India/i);
  expect(titleElement).toBeInTheDocument();

  const searchElement = screen.getByPlaceholderText(/Search careers/i);
  expect(searchElement).toBeInTheDocument();
});