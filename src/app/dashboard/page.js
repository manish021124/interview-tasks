'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Dashboard = () => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Get 'token' cookie
    const token = Cookies.get('token');

    // Redirect user to login page, if no token exists
    if (!token) {
      router.push('/login');
    } else {
      setIsAuth(true);
    }
  }, [router]);

  // If user is not authenticated, return null (render nothing)
  if(!isAuth) {
    return null;
  }

  // If user is authenticated, display the dashboard
  return (
    <div className="flex justify-center flex-col items-center mt-20">
      <h1 className="text-4xl font-bold">Welcome to the Dashboard!</h1>
      <p className='text-xl mt-4'>Try going back to login page.</p>
    </div>
  );
};

export default Dashboard;
