import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

const Link = styled.a`
  font-size: 2em;
  transition: color 0.1s ease-in-out;
  color: white;
  &:hover {
    color: LightSeaGreen;
  }
`;
export default function SocialLink({ href, icon }) {
  return (
    <Link href={href}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
