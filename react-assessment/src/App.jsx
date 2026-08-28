import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Owner from './pages/Owner';

function App() {

  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </div>

  )
};

export default App;