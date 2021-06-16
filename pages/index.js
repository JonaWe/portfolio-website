import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import MainScreen from '../components/MainScreen';
import projectList from '../lib/projectList';

import styled from 'styled-components';
import About from '../components/About';
import Contact from '../components/Contact';

const MainWrapper = styled.div``;

export default function Home({ projectList }) {
  return (
    <MainWrapper>
      <Navbar />
      <MainScreen />
      <About />
      <Projects projectList={projectList} />
      <Contact />
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
