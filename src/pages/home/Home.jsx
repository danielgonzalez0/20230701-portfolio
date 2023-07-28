import React, { useLayoutEffect, useRef } from 'react';
import Intro from '../../components/sections/intro/Intro';
import About from '../../components/sections/about/About';
import Skills from '../../components/sections/skills/Skills';
import Work from '../../components/sections/work/Work';
import Contact from '../../components/sections/contact/Contact';
import handleAnimationLaunch from '../../utils/handleAnimationLaunch';
import { useDispatch } from 'react-redux';
import { getAllProjects } from '../../redux/projects.slice';

const Home = () => {
  const dispatch = useDispatch();
  const refThree = useRef(null);

  useLayoutEffect(() => {
    // setTimeout(() => {
      window.addEventListener('scroll', () => {
        handleAnimationLaunch(refThree.current);
      });
    // }, 1);
    const dataFetch = async () => {
      await fetch(
        'https://portfolio-a97f1-default-rtdb.europe-west1.firebasedatabase.app/projects/data.json'
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          dispatch(getAllProjects(data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    dataFetch();
  }, []);

  return (
    <main>
      <Intro />
      <div ref={refThree}>
        <Skills />
        <Work />
        <About />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
