import { NavLink, Link } from 'react-router-dom';

const linkClass = ({ isActive }) => (isActive ? 'active' : undefined);

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <Link to="/" className="brand">
          Redlined &amp; Left Behind
        </Link>
        <div className="nav-links">
          <NavLink to="/history" className={linkClass}>
            History
          </NavLink>
          <NavLink to="/transit-gaps" className={linkClass}>
            Transit gaps
          </NavLink>
          <NavLink to="/map" className={linkClass}>
            Map
          </NavLink>
          <NavLink to="/solutions" className={linkClass}>
            Solutions
          </NavLink>
          <NavLink to="/references" className={linkClass}>
            References
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
