'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuth, setIsAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      router.push('/dashboard');
    } else {
      setIsAuth(false);
    }
  }, [router]);

  if (isAuth) {
    return null; // If user is authenticated, render nothing (null)
  }

  // Function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the default way (page reload)

    if (username === 'admin' && password === 'password') {
      // Set token in cookies to mark user as authenticated (expires in 1 day)
      Cookies.set('token', 'authenticated', { expires: 1 });
      // Redirect to dashboard after successful login
      router.push('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center mt-20 bg-cover bg-center">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 bg-opacity-90 p-8 shadow-lg rounded-lg w-96"
      >
        <h1 className="text-2xl text-white font-bold mb-6 text-center">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Username input field */}
        <div className="mb-4">
          <label className="block text-gray-300">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full text-gray-900 px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            placeholder="Enter username"
          />
        </div>

        {/* Password input field */}
        <div className="mb-6">
          <label className="block text-gray-300">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-gray-900 px-3 py-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            placeholder="Enter password"
          />
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
