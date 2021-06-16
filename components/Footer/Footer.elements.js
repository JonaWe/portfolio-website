import styled from 'styled-components';

export const FooterBox = styled.footer`
  padding: 0.5em;
  width: 100%;

  background: ${({ theme }) => theme.backgroundPrimary};
  color: ${({ theme }) => theme.fontColorPrimary};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'social sitemap contact'
    'copy copy copy';
  align-items: center;
  grid-gap: 1.5em;
  a:hover {
    transition: all 0.1s ease-in-out;
    color: ${({ theme }) => theme.fontColorAccent};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'sitemap'
      'contact'
      'social'
      'copy';
  }
`;

export const CopyrightArea = styled.div`
  grid-area: copy;
  text-align: center;
`;

export const SocialArea = styled.div`
  grid-area: social;
  justify-self: end;
  display: grid;

  @media screen and (max-width: 768px) {
    justify-self: center;
    grid-gap: 0.75em;
    grid-auto-flow: column;
  }
`;

export const SiteMapArea = styled.div`
  width: 100%;
  grid-area: sitemap;
  justify-self: start;
  align-self: start;
  display: grid;
  grid-gap: 0.5em;
  a {
    display: inline-block;
  }
`;

export const ContactArea = styled.address`
  grid-area: contact;
`;

export const Title = styled.h3`
  font-style: normal;
  color: ${({ theme }) => theme.fontColorAccent};
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Hr = styled.hr`
  margin-bottom: 1.75em;
  border-color: ${(props) => props.theme.fontColorPrimary};
`;
