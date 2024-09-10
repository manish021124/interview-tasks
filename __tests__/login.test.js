import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import LoginPage from '@/app/login/page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('js-cookie');

describe('LoginPage', () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({ push: pushMock });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders login form', () => {
    render(<LoginPage />);

    // Check that the heading and input fields are present in the document
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument(); // Use role for heading
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument();
  });

  test('shows error on invalid login', async () => {
    render(<LoginPage />);

    // Simulate user input for invalid credentials
    fireEvent.change(screen.getByPlaceholderText('Enter username'), {
      target: { value: 'wrongUser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter password'), {
      target: { value: 'wrongPassword' },
    });

    // Simulate clicking the login button
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Expect an error message to be displayed for invalid credentials
    expect(await screen.findByText('Invalid username or password')).toBeInTheDocument();
    expect(pushMock).not.toHaveBeenCalled(); // Ensure no redirection occurred
  });

  test('redirects to dashboard on successful login', async () => {
    render(<LoginPage />);

    // Simulate usre input for valid credentials
    fireEvent.change(screen.getByPlaceholderText('Enter username'), {
      target: { value: 'admin' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter password'), {
      target: { value: 'password' },
    });

    // Simulate clicking the login button
    fireEvent.click(screen.getByRole('button', { name: /login/i })); // Use role for button

    // Expect the cookie is set with the correct token and expiry
    expect(Cookies.set).toHaveBeenCalledWith('token', 'authenticated', { expires: 1 });
    // Expect to redirect to the dashboard after successful login
    expect(pushMock).toHaveBeenCalledWith('/dashboard');
  });
});
