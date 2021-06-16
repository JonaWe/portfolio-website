import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.backgroundPrimary};
  ${'' /* background: rgba(0, 0, 0, 0.7); */}
  color: ${({ theme }) => theme.fontColorPrimary};
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.35);
  list-style-type: none;
  display: flex;
  justify-content: center;
  column-gap: 1em;

  @media screen and (max-width: 768px) {
    background: none;
    box-shadow: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    position: absolute;
    background: ${({ theme }) => theme.fontColorAccent};
    z-index: 9999;
  }
`;

export const MobileIcon = styled(FontAwesomeIcon)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 2vh 5vw 0 0;
    font-size: 1.75em;
    color: ${({ theme }) => theme.backgroundPrimary};
  }
`;

export const MobileLinkItem = styled(Link)`
  color: ${({ theme }) => theme.backgroundPrimary};
  background: red;
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
