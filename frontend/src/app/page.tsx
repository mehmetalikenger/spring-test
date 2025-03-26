'use client';

import { useEffect } from 'react';
import { userService, User } from '../services/userService';

export default function Home() {
  useEffect(() => {
    const createAndFetchUsers = async () => {
      try {
        // Create a new user
        const newUser: User = {
          name: 'Mehmet Ali Kenger',
          email: 'mehmetalikenger@outlook.com'
        };
        const createdUser = await userService.createUser(newUser);
        console.log('Created user:', createdUser);

        // Fetch all users
        const users = await userService.getUsers();
        console.log('All users:', users);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    createAndFetchUsers();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">User Management</h1>
        <p>Check the browser console to see the user data</p>
      </div>
    </main>
  );
}
