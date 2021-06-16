import styled from 'styled-components';

export const ViewBox = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.fontColorAccent};
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3.5em;
  margin-bottom: 0;
`;

export const SubTitle = styled.h2`
  font-size: 2.25em;
  margin: 0 0 0.75em 0;
`;

export const MoreButton = styled.a`
  font-size: 1.25em;
  display: inline-block;
  padding: 1em 2em;
  background: ${({ theme }) => theme.backgroundPrimary};
  color: ${({ theme }) => theme.fontColorPrimary};
  border-radius: 2em;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    transition: all 0.2s ease;
    color: ${({ theme }) => theme.backgroundPrimary};
    background: ${({ theme }) => theme.fontColorPrimary};
  }
`;
