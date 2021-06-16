import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import styled from 'styled-components';
import MainScreen from '../components/MainScreen';

const MainWrapper = styled.div``;

export default function Home() {
  return (
    <MainWrapper>
      <Navbar />
      <MainScreen />
      <Footer />
    </MainWrapper>
  );
}
