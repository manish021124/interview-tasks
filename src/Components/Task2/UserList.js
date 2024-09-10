"use client";
import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetching user data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        // Parsing the response data into JSON fomat
        const data = await response.json();
        setUsers(data.map(user => user.name));
      } catch (error) {
        setError(error.message);
      } finally {
        // Once the fetch is complete, stop the loading state
        setLoading(false);
      }
    };
    fetchUsers(); // Call the fetchUsers when the component mounts
  }, []); // runs only once on mount

  if (loading) return <div className='text-xl font-semibold'>Loading...</div>;
  if (error) return <div className="text-red-500 text-center mb-4">Error: {error}</div>;

  return (
    <ul className='list-disc list-inside divide-y divide-gray-300'>
      {users.map((user, index) => (
        <li key={index} className="mb-2 text-white text-lg hover:bg-gray-500 transition duration-300 ease-in-out rounded-md">{user}</li>
      ))}
    </ul>
  );
};

export default UserList;
