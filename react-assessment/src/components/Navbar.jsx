import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-end border-b p-4 gap-6">
      <Link to="/" className="font-bold">Home</Link>
      <Link to="/owner" className="font-bold">Owner</Link>
    </nav>
  );
}

export default Navbar;