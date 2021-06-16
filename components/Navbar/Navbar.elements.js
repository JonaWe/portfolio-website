import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  left: 0;
  top: 0;
  background: #eee;
  list-style-type: none;
  display: flex;
  justify-content: center;
  column-gap: 2em;
`;

export const Item = styled.li`
  background: none;
`;

export const BlockLink = styled.a`
  display: block;
  padding: 0.5em 1em;
  font-weight: normal;
  transition: font-weight 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    font-weight: bolder;
  }
`;
