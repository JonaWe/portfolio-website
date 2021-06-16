import { useState } from 'react';
import LinkItem from './LinkItem';
import { MobileMenu, MobileIcon, MobileLinkItem, Nav } from './Navbar.elements';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Nav>
      <MobileIcon icon={faBars} onClick={() => setMobileMenuOpen(true)} />
      {mobileMenuOpen ? (
        <MobileMenu>
          {navElements.map(({ name, link }) => (
            <MobileLinkItem href={link} key={name}>
              <a>{name}</a>
            </MobileLinkItem>
          ))}
          <MobileIcon icon={faTimes} onClick={() => setMobileMenuOpen(false)} />
        </MobileMenu>
      ) : null}

      {navElements.map(({ name, link }) => (
        <LinkItem key={link} content={name} href={link} />
      ))}
    </Nav>
  );
}

export const navElements = [
  {
    name: 'Home',
    link: '#home',
  },
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];
