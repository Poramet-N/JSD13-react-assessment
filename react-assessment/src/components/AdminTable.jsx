import { useState, useEffect } from 'react';

function AdminTable() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    position: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.lastname || !formData.position) return;

    try {
      const response = await fetch('https://67eca027aa794fb3222e43e2.mockapi.io/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', lastname: '', position: '' });
        fetchUsers(); 
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchUsers(); 
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-3 text-center">Create User Here</h3>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 justify-center items-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-black"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-black"
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={formData.position}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-black"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 shadow"
          >
            Save
          </button>
        </form>
      </div>

      {/* Table Section */}
      {isLoading ? (
        <div className="text-center py-4 font-bold">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-3 border-r font-bold text-gray-700">Name</th>
                <th className="p-3 border-r font-bold text-gray-700">Last Name</th>
                <th className="p-3 border-r font-bold text-gray-700">Position</th>
                <th className="p-3 font-bold text-gray-700 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 border-r">{user.name}</td>
                  <td className="p-3 border-r">{user.lastname}</td>
                  <td className="p-3 border-r">{user.position}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
};

export default AdminTable;