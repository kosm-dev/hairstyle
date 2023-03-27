window.addEventListener("DOMContentLoaded", () => {
  const menuOpen = document.querySelector('.menu-open'),
    menu = document.querySelector('.header__menu'),
    body = document.querySelector('body'),
    header = document.querySelector('header'),
    menuClose = document.querySelector('.menu-close'),
    logo = document.querySelector('.logo');

  menuOpen.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    header.classList.toggle('active');
    menuOpen.classList.add('active');
    menuClose.classList.add('active');
    logo.classList.add('active');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    header.classList.toggle('active');
    menuOpen.classList.remove('active');
    menuClose.classList.remove('active');
    logo.classList.remove('active');
  });
});