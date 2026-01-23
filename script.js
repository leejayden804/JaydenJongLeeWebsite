let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active')
}

const vid = document.querySelector('.about-video');

if (vid) {
  vid.addEventListener('click', () => {
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  });
}