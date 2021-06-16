import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 100;
  ${'' /* background: ${({ theme }) => theme.backgroundPrimary}; */}
  background: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.fontColorPrimary};
  list-style-type: none;
  display: flex;
  justify-content: center;
  column-gap: 1em;
`;

export const Item = styled.li`
  background: none;
`;

export const BlockLink = styled.a`
  display: block;
  padding: 0.75em 1.5em;
  font-weight: normal;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    font-weight: bolder;
    color: ${({ theme }) => theme.fontColorAccent};
  }
  &:active {
    border: red;
  }
`;
