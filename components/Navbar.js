import styled from 'styled-components';
import LinkItem from './LinkItem';

const Nav = styled.nav`
  position: sticky;
  left: 0;
  top: 0;
  background: #eee;
  list-style-type: none;
  display: flex;
  justify-content: center;
  column-gap: 2em;
`;

export default function Navbar() {
  return (
    <Nav>
      <LinkItem content="Home" href="#home" />
      <LinkItem content="About" href="#about" />
      <LinkItem content="Contact" href="#contact" />
      <LinkItem content="Langer Text" href="#contact" />
    </Nav>
  );
}
