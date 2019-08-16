let navOpen = false;
document.querySelector('.fa-bars').addEventListener('click', () => {
  document.querySelector('.mobile_nav').style.minWidth = navOpen
    ? '0px'
    : '250px';
  navOpen = !navOpen;
});
