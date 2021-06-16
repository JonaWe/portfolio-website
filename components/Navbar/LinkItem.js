import Link from 'next/link';

import { Item, BlockLink } from './Navbar.elements';

export default function LinkItem({ content, href }) {
  return (
    <Item>
      <Link href={href}>
        <BlockLink>{content}</BlockLink>
      </Link>
    </Item>
  );
}
