document.addEventListener('DOMContentLoaded', () => {
   const burgerMenuButton = document.querySelector('.nav__burger');
   const aboutCards = document.querySelectorAll('.about__card')

   burgerMenuButton.addEventListener('click', () => {
      burgerMenuButton.firstElementChild.classList.toggle('nav__burger_inner-active');
   });

   aboutCards.forEach(card => {
      card.addEventListener('click', function() {
         /* aboutCards.forEach(cardItem => {
            cardItem.classList.remove('about__card-clicked');
         })
 */
         card.classList.toggle('about__card-clicked');
      })
   })

   const contactsButton = document.querySelector('#contactsButton'),
         lessonsButton = document.querySelector('#lessonsButton'),
         mentorButton = document.querySelector('#mentorButton'),
         contactsModal = document.querySelector('#contactsModal'),
         lessonsModal = document.querySelector('#lessonsModal'),
         mentorModal = document.querySelector('#mentorModal'),
         modalCloseButton = document.querySelectorAll('.modal__inner_close'),
         modalOverlay = document.querySelectorAll('.modal__overlay');

   contactsButton.addEventListener('click', () => {
      contactsModal.style.display = 'flex';
   })

   lessonsButton.addEventListener('click', () => {
      lessonsModal.style.display = 'flex';
   })

   mentorButton.addEventListener('click', () => {
      mentorModal.style.display = 'flex';
   })

   /* closing modal windows */
   modalOverlay.forEach(overlay => {
      overlay.addEventListener('click', () => {
         overlay.parentElement.style.display = ''
      })
   })

   modalCloseButton.forEach(button => {
      button.addEventListener('click', () => {
         const currentModal = button.parentElement.parentElement;
         currentModal.style.display = '';
      })
   })

   // enabling / disabling scrolling events
   const disableScroll = () => {
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    };
    const enableScroll = () => {
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
})