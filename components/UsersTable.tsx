import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const UsersTable: React.FC = () => {
  const users = useSelector((state: RootState) => state.users);
  const [searchTerm, setSearchTerm] = useState('');
  interface User {
    id: number;
    name: string;

  }
  const filteredUsers = users.filter((user: User) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {}
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user:User) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              {}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
