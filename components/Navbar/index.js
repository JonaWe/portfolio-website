import { useState } from 'react';
import LinkItem from './LinkItem';
import {
  MobileMenu,
  MobileIcon,
  MobileLinkItem,
  MobileLinkList,
  Nav,
} from './Navbar.elements';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Nav>
      <MobileIcon icon={faBars} onClick={() => setMobileMenuOpen(true)} />
      {mobileMenuOpen ? (
        <MobileMenu>
          <MobileIcon icon={faTimes} onClick={() => setMobileMenuOpen(false)} />
          <MobileLinkList>
            {navElements.map(({ name, link }) => (
              <MobileLinkItem key={name} href={link}>
                <a onClick={() => setMobileMenuOpen(false)}>{name}</a>
              </MobileLinkItem>
            ))}
          </MobileLinkList>
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
    name: 'Projects',
    link: '#projects',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];
