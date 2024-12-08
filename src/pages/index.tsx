// Home.tsx
import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { User } from '@/types/User';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <main className="container mx-auto px-4 mb-52 bg-black">
      <h1 className="text-3xl font-bold text-center my-8">User Management</h1>
      <UserForm users={users} setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />
    </main>
  );
}
