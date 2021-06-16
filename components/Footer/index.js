import Link from 'next/link';
import SocialLink from '../Navbar/SocialLink';
import { faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import {
  FooterBox,
  SocialArea,
  SiteMapArea,
  Title,
  ContactArea,
  CopyrightArea,
  Hr,
} from './Footer.elements';
import { navElements } from '../Navbar';

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
        {navElements.map(({ name, link }) => (
          <Link key={link} href={link}>
            <a>{name}</a>
          </Link>
        ))}
      </SiteMapArea>
      <ContactArea>
        <Title>Contact</Title>
        <p>Jona Wessendorf</p>
        <a href="mailto:example@example.com">example@example.com</a>
      </ContactArea>

      <CopyrightArea>
        <Hr />
        <p>Copyright &copy; 2021 Jona Wessendorf. All rights reserved.</p>
      </CopyrightArea>
    </FooterBox>
  );
}
