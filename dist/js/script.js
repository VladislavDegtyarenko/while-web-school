document.addEventListener('DOMContentLoaded', () => {
   const burgerMenuButton = document.querySelector('.nav__burger');

   burgerMenuButton.addEventListener('click', () => {
      burgerMenuButton.firstElementChild.classList.toggle('nav__burger_inner-active');
   })
})