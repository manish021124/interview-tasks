import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from '../src/Components/Task2/UserList';

global.fetch = jest.fn();

describe('UserList', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly when data is fetched successfully', async () => {
    // Mock the API response for a successful fetch
    fetch.mockResolvedValueOnce({
      ok: true, // Simulate a successful response
      json: jest.fn().mockResolvedValueOnce([
        { name: 'User 1' }, // Sample user data to be returned
        { name: 'User 2' },
        { name: 'User 3' },
      ]),
    });

    render(<UserList />);

    // Check if loading text is displayed while fetching data
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for user names to be displayed
    await waitFor(() => expect(screen.getByText('User 1')).toBeInTheDocument());
    expect(screen.getByText('User 2')).toBeInTheDocument();
    expect(screen.getByText('User 3')).toBeInTheDocument();
  });

  test('displays loading state', () => {
    // Mock the API response but do not provide user data
    fetch.mockResolvedValueOnce({ ok: true, json: jest.fn() });

    render(<UserList />);

    // Check if loading text is displayed initially
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when API call fails', async () => {
    // Mock the API response to simulate an error
    fetch.mockRejectedValueOnce(new Error('Failed to fetch users'));

    render(<UserList />);

    // Check if loading text is displayed initially
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for the error message to be displayed
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
    expect(screen.getByText(/error: failed to fetch users/i)).toBeInTheDocument();
  });
});
