import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Dashboard from '@/app/dashboard/page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(), // Mock the useRouter function from Next.js
}));

jest.mock('js-cookie'); // Mock the js-cookie library.

describe('Dashboard', () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    // Before each test, set the return value of useRouter to an object containing the mock push function
    useRouter.mockReturnValue({ push: pushMock });
  });

  afterEach(() => {
    // Clear all mocks after each test to ensure test isolation
    jest.clearAllMocks();
  });

  test('redirects to login if no token is present', () => {
    Cookies.get.mockReturnValue(undefined); // Simulate no token

    render(<Dashboard />);

    expect(pushMock).toHaveBeenCalledWith('/login');
  });

  test('renders the dashboard if token is present', () => {
    Cookies.get.mockReturnValue('valid-token'); // Simulate a valid token

    render(<Dashboard />);

    expect(screen.getByText('Welcome to the Dashboard!')).toBeInTheDocument();
    expect(pushMock).not.toHaveBeenCalled(); // No redirection
  });
});
