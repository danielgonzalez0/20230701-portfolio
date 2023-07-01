import React from 'react';
import Intro from '../../components/sections/intro/Intro';
import About from '../../components/sections/about/About';
import Skills from '../../components/sections/skills/Skills';
import Work from '../../components/sections/work/Work';
import Contact from '../../components/sections/contact/Contact';

const Home = () => {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
};

export default Home;
