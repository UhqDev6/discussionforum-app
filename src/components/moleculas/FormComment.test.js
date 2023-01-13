/**
 * test scenario FormComment
 * - should handle commentInput typing correctly
 * - should call function submit when button is click
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import FormComment from './FormComment';

describe('FormComment Component', () => {
  it('should handle commentInput typing correctly', async () => {
    // arrange
    render(<FormComment onAddComment={() => {}} />);
    // mock comment
    const commentInput = await screen.getByTestId('threadComment');

    // action
    await userEvent.type(commentInput, 'commentTest');

    // assert
    expect(commentInput).toHaveValue('commentTest');
  });

  it('should call function submit when button is click', async () => {
    // arrange
    // mock submit
    const mockSubmit = jest.fn();
    await act(async () => render(<FormComment onAddComment={mockSubmit} />));
    // mock comment
    const commentInput = await screen.getByTestId('threadComment');

    // action
    await userEvent.type(commentInput, 'commentTest');
    const submitComment = await screen.getByRole('button');

    await act(async () => {
      userEvent.click(submitComment);
    });

    // assert
    expect(mockSubmit).toBeCalledWith({ comment: 'commentTest' });
  });
});
