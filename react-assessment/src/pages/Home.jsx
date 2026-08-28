import { useState } from 'react';
import Buttons from '../components/Buttons';
import UserTable from '../components/UserTable';
import AdminTable from '../components/AdminTable';

function Home() {

  const [section, setSection] = useState('default')

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 px-4 pt-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-5 text-black">Generation Thailand</h1>

      <h1 className="text-3xl md:text-4xl font-bold text-black -mt-2">
        {section === 'default' && 'React - Assessment'}
        {section === 'user' && 'Home - User Section'}
        {section === 'admin' && 'Home - Admin Section'}
      </h1>

      <Buttons setSection={setSection} />

      <div className="w-full max-w-4xl mt-6">
        {section === 'user' && <UserTable />}
        {section === 'admin' && <AdminTable />}
      </div>

    </div>
  )
};

export default Home;