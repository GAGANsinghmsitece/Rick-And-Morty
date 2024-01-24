import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharacterGrid from './CharacterGrid';

describe('<CharacterGrid />', () => {
  test('it should mount', () => {
    render(<CharacterGrid />);
    
    const characterGrid = screen.getByTestId('CharacterGrid');

    expect(characterGrid).toBeInTheDocument();
  });
});