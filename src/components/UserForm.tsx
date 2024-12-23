import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { User } from '@/types/User';

interface UserFormProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const UserForm: React.FC<UserFormProps> = ({ setUsers }) => {
  const [user, setUser] = useState<Omit<User, 'id'>>({
    first_name: '',
    last_name: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, user);
      console.log(response);
      alert('User submitted successfully!');
      await fetchUsers();
      setUser({
        first_name: '',
        last_name: '',
        address: '',
        phone: '',
        email: ''
      });
    } catch (error) {
      console.error('Error submitting user:', error);
      alert('Failed to submit user');
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update the user state dynamically based on the input name
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10">
      <div className="mb-4">
        <input
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="w-full px-3 py-2 border rounded text-black"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="w-full px-3 py-2 border rounded text-black"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="w-full px-3 py-2 border rounded text-black"
        />
      </div>
      <div className="mb-4">
        <input
          type="tel"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="w-full px-3 py-2 border rounded text-black"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-3 py-2 border rounded text-black"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Submit User
      </button>
    </form>
  );
};

export default UserForm;
