const handleAnimationLaunch = () => {
  const header = document.getElementsByTagName('header')[0];
  const intro = document.getElementById('intro');
  const about = document.getElementById('about');
  const skill = document.getElementById('skills');
  const work = document.getElementById('work');
  const skillContainer = document.querySelector('.skills-container');
  const workContainer = document.querySelector('.work-container');

  if (
    window.scrollY + window.innerHeight - 200 >=
    header.offsetHeight + intro.offsetHeight
  ) {
    skillContainer.classList.add('animeOpen');
  } else {
    if (skillContainer.classList.contains('animeOpen'))
      skillContainer.classList.remove('animeOpen');
  }

  if (
    window.scrollY + window.innerHeight - 200 >=
    header.offsetHeight + intro.offsetHeight + skill.offsetHeight
  ) {
    workContainer.classList.add('animeOpen');
  } else {
    if (workContainer.classList)
      workContainer.classList.remove('animeOpen');
  }

  if (
    window.scrollY + window.innerHeight >=
    header.offsetHeight +
      intro.offsetHeight +
      skill.offsetHeight +
      about.offsetHeight
  ) {
    document.querySelector('.wrapper').classList.add('animeOpen');
  } else {
    document.querySelector('.wrapper').classList.remove('animeOpen');
  }
  if (
    window.scrollY + window.innerHeight >=
    header.offsetHeight +
      intro.offsetHeight +
      skill.offsetHeight +
      about.offsetHeight +
      work.offsetHeight
  ) {
    document.querySelector('.form-container').classList.add('animeOpen');
  } else {
    document.querySelector('.form-container').classList.remove('animeOpen');
  }
};

export default handleAnimationLaunch;
