import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          Search the Professionals
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/profile" className="navbar-link">
          Profile
        </Link>
        <Link to="/login" className="navbar-link">
          Login
        </Link>
        <Link to="/logout" className="navbar-link">
          Logout
        </Link>
      </div>
    </nav>
  );
}
