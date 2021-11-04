import React from 'react';
import { render, screen } from '@testing-library/react';
import BattleShip from './BattleShip';

test('renders learn react link', () => {
  render(<BattleShip />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
