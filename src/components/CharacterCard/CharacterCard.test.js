import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharacterCard from './CharacterCard';

describe('<CharacterCard />', () => {
  test('it should mount', () => {
    render(<CharacterCard />);
    
    const characterCard = screen.getByTestId('CharacterCard');

    expect(characterCard).toBeInTheDocument();
  });
});