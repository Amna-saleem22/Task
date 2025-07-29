import { Link } from 'react-router-dom';
import './Navbar.css'; // External CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Amna</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
