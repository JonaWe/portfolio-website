import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.fontColorPrimary};
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <Title>Hey</Title>
      <Footer />
    </>
  );
}
