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
    align-items: center !important;
    justify-items: center !important;
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
`;

export const SiteMapArea = styled.div`
  grid-area: sitemap;
  justify-self: center;
  align-self: start;
  margin-bottom: 1em;
  display: grid;
  grid-gap: 0.5em;
`;

export const ContactArea = styled.address`
  grid-area: contact;
`;

export const Title = styled.h3`
  font-style: normal;
  color: ${({ theme }) => theme.fontColorAccent};
`;

export const Hr = styled.hr`
  border-color: ${(props) => props.theme.fontColorPrimary};
`;
