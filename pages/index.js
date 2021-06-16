import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import MainScreen from '../components/MainScreen';
import projectList from '../lib/projectList';

import styled from 'styled-components';

const MainWrapper = styled.div``;

export default function Home({ projectList }) {
  return (
    <MainWrapper>
      <Navbar />
      <MainScreen />
      <Projects projectList={projectList} />
      <Footer />
    </MainWrapper>
  );
}

export function getStaticProps() {
  return {
    props: {
      projectList,
    },
  };
}
