const burger = document.getElementById('burger');
  const navContent = document.getElementById('nav-content');

  burger.addEventListener('click', () => {
    navContent.classList.toggle('open');
  });