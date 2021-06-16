import LinkItem from './LinkItem';
import { Nav } from './Navbar.elements';

export default function Navbar() {
  return (
    <Nav>
      {navElements.map(({ name, link }) => (
        <LinkItem key={link} content={name} href={link} />
      ))}
    </Nav>
  );
}

export const navElements = [
  {
    name: 'Home',
    link: '/home',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];
