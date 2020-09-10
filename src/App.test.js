import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from './App'

test('Shows Add Note', () => {
  render(<App />)

  screen.debug()

  expect(screen.getByText('Add Note:')).toBeInTheDocument()
})
