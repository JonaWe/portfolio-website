import styled from 'styled-components';

export const Title = styled.h2`
  color: ${({ theme }) => theme.fontColorPrimary};
`;

export const ViewBox = styled.div`
  color: ${({ theme }) => theme.fontColorPrimary};
  background: ${({ theme }) => theme.backgroundSecondary};
  padding: 3em;
`;

export const ProjectList = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.fontColorPrimary};
  color: ${({ theme }) => theme.backgroundPrimary};
  text-align: center;

  max-width: 300px;
  min-height: 400px;
  border-radius: 30px;

  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

export const ProjectInfo = styled.div`
  background: white;
  border-radius: 30px 30px 0 0;
  display: grid;
  text-align: center;
`;

export const ProjectTitle = styled.h3`
  &:hover::before {
    content: '< ';
    color: ${({ theme }) => theme.fontColorAccent};
  }
  &:hover::after {
    content: ' />';
    color: ${({ theme }) => theme.fontColorAccent};
  }
`;

export const ProjectDescription = styled.p`
  align-self: center;
  justify-self: center;
`;
