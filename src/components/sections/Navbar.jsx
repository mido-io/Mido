import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { navLinks } from '../../constants/index.js';
import { profile } from '../../constants/profile.js';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useBodyScrollLock(isOpen);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm safe-top">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 lg:py-5 mx-auto c-space">
          <a
            href="#home"
            className="text-white-800 font-bold text-xl tracking-wide hover:text-white transition-colors"
            onClick={closeMenu}
          >
            {profile.displayName}.
          </a>

          <button
            type="button"
            onClick={toggleMenu}
            className="text-white-800 hover:text-white lg:hidden flex items-center justify-center min-w-11 min-h-11 -mr-2"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden lg:flex" aria-label="Main navigation">
            <NavItems />
          </nav>
        </div>
      </div>

      {isOpen ? (
        <>
          <button
            type="button"
            className="nav-overlay"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div id="mobile-nav" className="nav-drawer" aria-hidden={false}>
            <nav className="nav-drawer-inner" aria-label="Mobile navigation">
              <NavItems onClick={closeMenu} />
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
};

export default Navbar;
