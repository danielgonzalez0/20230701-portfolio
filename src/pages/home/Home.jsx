import React from 'react';
import Intro from '../../components/sections/intro/Intro';
import About from '../../components/sections/about/About';
import Skills from '../../components/sections/skills/Skills';
import Work from '../../components/sections/work/Work';
import Contact from '../../components/sections/contact/Contact';
import handleAnimationLaunch from '../../utils/handleAnimationLaunch';

const Home = () => {
  

      // let scrollYenPourcentage =
      //   (window.scrollY + window.innerHeight) / document.body.offsetHeight;
      // console.log('scrollYenPourcentage', scrollYenPourcentage);
      // console.log('window.innerHeight', window.innerHeight);
      // console.log('window.scrollY', window.scrollY);
      // console.log('document.body.offsetHeight', document.body.offsetHeight);
  

  window.addEventListener('scroll', () => {
   handleAnimationLaunch()
  })


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
