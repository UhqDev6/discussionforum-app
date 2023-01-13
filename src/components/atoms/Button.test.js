/**
 * test scenario testing Button Component
 * - should handle disabled when button is loading
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  it('should handle disabled when button is loading', async () => {
    // arrange
    render(<Button type="button" loading>Click for Test</Button>);

    // action
    const button = await screen.getByText('...');

    // assert
    expect(button).toBeDisabled();
  });
});
