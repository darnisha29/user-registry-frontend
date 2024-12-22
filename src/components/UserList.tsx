import React, { useEffect } from "react";
import axios from "axios";
import { User } from "@/types/User";

interface UserListProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const apiUrl = process.env.NEXT_API_GET_URL! ;

const UserList: React.FC<UserListProps> = ({users, setUsers }) => {

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(apiUrl);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [setUsers]);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200 text-black">
            <th className="border-r-black p-2">First Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border p-2">{user.firstName}</td>
              <td className="border p-2">{user.lastName}</td>
              <td className="border p-2">{user.address}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
