const handleAnimationLaunch = () => {
//   const body = document.body.offsetHeight;
  const header = document.getElementsByTagName('header')[0];
//   const footer = document.getElementsByTagName('footer')[0];
  const intro = document.getElementById('intro');
  const about = document.getElementById('about');
//   const skill = document.getElementById('skills');
//   const work = document.getElementById('work');
//   const contact = document.getElementById('contact');
  if (
    window.scrollY + window.innerHeight - 200 >=
    header.offsetHeight + intro.offsetHeight 
  ) {
    document.querySelector('.wrapper').classList.add('animeOpen');
  } 



  if (
    window.scrollY + window.innerHeight -200 >=
    header.offsetHeight + intro.offsetHeight + about.offsetHeight
  ) {
    document.querySelector('.skills-container').classList.add('animeOpen');
  } 
};

export default handleAnimationLaunch;