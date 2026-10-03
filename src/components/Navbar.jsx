import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ScrollProgress from './ScrollProgress';

const navItems = [
  ['/', 'Home'], [' /about'.trim(), 'About Me'], ['/projects', 'Projects'],
  ['/education', 'Education'], ['/services', 'Services'], ['/contact', 'Contact Me']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <ScrollProgress />
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="Jazeel Macareena home">
          <span className="logo-mark"><img src="/assets/jazeel-logo.png" alt="" /></span>
          <span className="brand-copy"><strong>Jazeel Macareena</strong><small>WEB DEVELOPER · SYSTEMS · DELIVERY</small></span>
        </Link>
        <button className={`menu-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(v => !v)} aria-label="Toggle navigation" aria-expanded={open}>
          <span /><span /><span />
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map(([path, label]) => (
            <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>
          ))}
          <Link className="nav-contact" to="/contact" onClick={() => setOpen(false)}>Let’s talk <span>↗</span></Link>
        </div>
      </nav>
    </header>
  );
}
