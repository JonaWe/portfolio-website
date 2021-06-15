import Link from 'next/link';
import SocialLink from './SocialLink';
import { faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const FooterBox = styled.footer`
  padding: 0.5em;
  width: 100%;

  background: #131313;
  color: white;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'social sitemap contact'
    'copy copy copy';
  align-items: center;
`;

const CopyrightArea = styled.div`
  grid-area: copy;
  text-align: center;
`;

const SocialArea = styled.div`
  grid-area: social;
  justify-self: end;
  display: grid;
`;

const SiteMapArea = styled.div`
  grid-area: sitemap;
  justify-self: center;
  align-self: start;
  margin-bottom: 1em;
  display: grid;
  grid-gap: 0.5em;
`;

const ContactArea = styled.address`
  grid-area: contact;
`;

const Title = styled.h3`
  font-style: normal;
  color: LightSeaGreen;
`;

export default function Footer() {
  return (
    <FooterBox>
      <SocialArea>
        <SocialLink href="https://github.com/JonaWe" icon={faGithub} />
        <SocialLink
          href="https://www.freecodecamp.org/jonawessendorf"
          icon={faFreeCodeCamp}
        />
      </SocialArea>

      <SiteMapArea>
        <Title>Sitemap</Title>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/bla">
          <a>Langer Text</a>
        </Link>
      </SiteMapArea>
      <ContactArea>
        <Title>Contact</Title>
        <p>Jona Wessendorf</p>
        <a href="mailto:example@example.com">example@example.com</a>
      </ContactArea>

      <CopyrightArea>
        <hr />
        <p>Copyright &copy; 2021 Jona Wessendorf. All rights reserved.</p>
      </CopyrightArea>
    </FooterBox>
  );
}
