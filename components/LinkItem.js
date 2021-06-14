import Link from 'next/link';
import styled from 'styled-components';

const Item = styled.li`
  background: none;
`;

const BlockLink = styled.a`
  display: block;
  padding: 0.5em 1em;
  font-weight: normal;
  transition: font-weight 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    font-weight: bolder;
  }
`;

export default function LinkItem({ content, href }) {
  return (
    <Item>
      <Link href={href}>
        <BlockLink>{content}</BlockLink>
      </Link>
    </Item>
  );
}
