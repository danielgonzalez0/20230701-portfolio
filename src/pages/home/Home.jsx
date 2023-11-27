import React, { useEffect, useRef } from 'react';
import Intro from '../../components/sections/intro/Intro';
import About from '../../components/sections/about/About';
import Skills from '../../components/sections/skills/Skills';
import Work from '../../components/sections/work/Work';
import Contact from '../../components/sections/contact/Contact';
import handleAnimationLaunch from '../../utils/handleAnimationLaunch';
import { useDispatch } from 'react-redux';
import { getAllProjects } from '../../redux/projects.slice';
import ContactBtn from '../../components/buttons/contactBtn/ContactBtn';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../../utils/firebase';

const Home = () => {
  const dispatch = useDispatch();
  const refThree = useRef(null);
  const URL = process.env.REACT_APP_FIREBASE_URL;

  
  const dataFetch = async () => {
    await fetch(`${URL}data.json`)
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

  const handleAuthAnonymous = () => {
    signInAnonymously(auth)
      .then(() => dataFetch())
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleAuthAnonymous();

    const handleScroll = () => {
      handleAnimationLaunch(refThree.current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
      <ContactBtn />
    </main>
  );
};

export default Home;
