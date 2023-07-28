const handleAnimationLaunch = (element) => {
  const collection = element.children;

  for (let i = 0; i < collection.length; i++) {
    let topPos = collection[i].getBoundingClientRect().top;
    if (topPos < 800) {
      if (!collection[i].classList.contains('animeOpen'))
        collection[i].firstChild.classList.add('animeOpen');
    } else {
        collection[i].firstChild.classList.remove('animeOpen');
    }
  }
};

export default handleAnimationLaunch;
