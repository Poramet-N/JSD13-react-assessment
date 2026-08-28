import { useState, useEffect } from 'react';

function UserTable() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://67eca027aa794fb3222e43e2.mockapi.io/members');
                const data = await response.json();

                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (isLoading) {
    return <div className="text-center py-4 font-bold">Loading...</div>;
  }

    return (
        <div className="overflow-x-auto">
      <table className="w-full bg-white border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-3 border-r font-bold text-gray-700">Name</th>
            <th className="p-3 border-r font-bold text-gray-700">Last Name</th>
            <th className="p-3 font-bold text-gray-700">Position</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-3 border-r">{user.name}</td>
              <td className="p-3 border-r">{user.lastname}</td>
              <td className="p-3">{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
};

export default UserTable;