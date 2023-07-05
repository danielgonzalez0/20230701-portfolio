import React, { useEffect } from 'react';
import Intro from '../../components/sections/intro/Intro';
import About from '../../components/sections/about/About';
import Skills from '../../components/sections/skills/Skills';
import Work from '../../components/sections/work/Work';
import Contact from '../../components/sections/contact/Contact';

const Home = () => {

const myObserver = new ResizeObserver((entries) => {
entries.forEach((entry) => {
  console.log('width', entry.contentRect.width);
  console.log('height', entry.contentRect.height);
});
});

myObserver.observe(document.body)

  useEffect(() => {
    let headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
    let introHeight = document.getElementById('intro').offsetHeight;
    let aboutHeight = document.getElementById('about').offsetHeight;
    let skillsHeight = document.getElementById('skills').offsetHeight;
    let workHeight = document.getElementById('work').offsetHeight;
    let contactHeight = document.getElementById('contact').offsetHeight;
    let footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;
    let total =
      headerHeight +
      introHeight +
      aboutHeight +
      skillsHeight +
      workHeight +
      contactHeight +
      footerHeight;
    console.log('headerHeight', headerHeight);
    console.log('introHeight', introHeight);
    console.log('aboutHeight', aboutHeight);
    console.log('skillsHeight', skillsHeight);
    console.log('workHeight', workHeight);
    console.log('contactHeight', contactHeight);
    console.log('footerHeight', footerHeight);
    console.log('total', total);
    console.log('total body', document.body.offsetHeight);
  }, [document.body.offsetHeight]);

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
