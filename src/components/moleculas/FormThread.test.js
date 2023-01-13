/**
 * test scenario FormThread
 * - should handle title typing correctly
 * - should handle category typing correctly
 * - should handle body typing correctly
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import FormThread from './FormThread';

describe('FormThread Component', () => {
  it('should handle title typing correctly', async () => {
    // arrange
    render(<FormThread onAddThread={() => {}} />);
    // mock title
    const titleInput = await screen.getByTestId('reactJs');

    // action
    await userEvent.type(titleInput, 'reactJs');

    // assert
    expect(titleInput).toHaveValue('reactJs');
  });

  it('should handle category typing correctly', async () => {
    // arrange
    render(<FormThread onAddThread={() => {}} />);
    // mock category
    const categoryInput = await screen.getByTestId('redux');

    // action
    await userEvent.type(categoryInput, 'redux');

    // assert
    expect(categoryInput).toHaveValue('redux');
  });

  it('should handle body typing correctly', async () => {
    // arrange
    render(<FormThread onAddThread={() => {}} />);
    // mock body
    const bodyInput = await screen.getByTestId('learnRedux');

    // action
    await userEvent.type(bodyInput, 'learnRedux');

    // assert
    expect(bodyInput).toHaveValue('learnRedux');
  });
});
