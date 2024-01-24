import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageFallback from './ImageFallback';

describe('<ImageFallback />', () => {
  test('it should mount', () => {
    render(<ImageFallback />);
    
    const imageFallback = screen.getByTestId('ImageFallback');

    expect(imageFallback).toBeInTheDocument();
  });
});