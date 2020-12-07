let element = document.querySelector('.form__input')
let phoneMask = IMask(element, {
   mask: '+{38} (000) 000 - 00 - 00',
   lazy: false,  // make placeholder always visible
   colorMask: '#ff0000'
 });

document.addEventListener('DOMContentLoaded', () => {
   const burgerMenuButton = document.querySelector('.nav__burger');
   const aboutCards = document.querySelectorAll('.about__card');

   burgerMenuButton.addEventListener('click', () => {
      burgerMenuButton.firstElementChild.classList.toggle('nav__burger_inner-active');
   });

   aboutCards.forEach(card => {
      card.addEventListener('click', function() {
         /* aboutCards.forEach(cardItem => {
            cardItem.classList.remove('about__card-clicked');
         }) */
         card.classList.toggle('about__card-clicked');
      })
   })

   const contactsButton = document.querySelector('#contactsButton'),
         addressFooterButton = document.querySelector("#addressFooterButton"),
         lessonsButton = document.querySelector('#lessonsButton'),
         mentorButton = document.querySelector('#mentorButton'),
         aboutusButton = document.querySelector('#aboutusButton'),
         callToActionButton = document.querySelectorAll('.button');

   const contactsModal = document.querySelector('#contactsModal'),
         lessonsModal = document.querySelector('#lessonsModal'),
         mentorModal = document.querySelector('#mentorModal'),
         aboutusModal = document.querySelector('#aboutusModal'),
         formModal = document.querySelector('#formModal');

   const modalCloseButton = document.querySelectorAll('.modal__inner_close'),
         modalOverlay = document.querySelectorAll('.modal__overlay');


   contactsButton.addEventListener('click', () => {
      contactsModal.style.display = 'flex';
      modalSectionOpened = 1;
      checkModalWindowsState();
   })

   addressFooterButton.addEventListener('click', function(event) {
      event.preventDefault();
      contactsModal.style.display = 'flex';
      modalSectionOpened = 1;
      checkModalWindowsState();
   })

   lessonsButton.addEventListener('click', () => {
      lessonsModal.style.display = 'flex';
      modalSectionOpened = 1;
      checkModalWindowsState();
   })

   mentorButton.addEventListener('click', () => {
      mentorModal.style.display = 'flex';
      modalSectionOpened = 1;
      checkModalWindowsState();
   })

   aboutusButton.addEventListener('click', () => {
      aboutusModal.style.display = 'flex';
      modalSectionOpened = 1;
      checkModalWindowsState();
   })

   callToActionButton.forEach(button => {
      button.addEventListener('click', () => {
         formModal.style.display = 'flex';
         modalFormOpened = 1;
         checkModalWindowsState();
      })
   })

   /* closing modal windows */
   modalOverlay.forEach(overlay => {
      overlay.addEventListener('click', () => {
         let currentModal = overlay.parentElement;
         currentModal.style.display = '';

         if (currentModal.classList.contains('modalSection')) {
            modalSectionOpened = 0;
            checkModalWindowsState();
         }
         if (currentModal.classList.contains('modalForm')) {
            modalFormOpened = 0;
            checkModalWindowsState();
         }
      })
   })

   modalCloseButton.forEach(button => {
      button.addEventListener('click', () => {
         let currentModal = button.parentElement.parentElement;
         currentModal.style.display = '';
         
         if (currentModal.classList.contains('modalSection')) {
            modalSectionOpened = 0;
            checkModalWindowsState();
         }
         if (currentModal.classList.contains('modalForm')) {
            modalFormOpened = 0;
            checkModalWindowsState();
         }
      })
   });

   // enabling / disabling scrolling events
   let scrollbarWidth;

   function getScrollbarWidth() {

      // Creating invisible container
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.overflow = 'scroll'; // forcing scrollbar to appear
      outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
      document.body.appendChild(outer);
    
      // Creating inner element and placing it in the container
      const inner = document.createElement('div');
      outer.appendChild(inner);
    
      // Calculating difference between container's full width and the child width
      scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
    
      // Removing temporary elements from the DOM
      outer.parentNode.removeChild(outer);
    
      return scrollbarWidth;
   }
   getScrollbarWidth();
   console.log(scrollbarWidth);


   const disableBodyScroll = function() {
      document.body.style =
      `overflow-y:hidden; position: relative; margin-right: ${scrollbarWidth}px;`;
   }
   const enableBodyScroll = () => {
      document.body.style = ""
   }


   // Defining modal conditions
   let modalSectionOpened = 0, modalFormOpened = 0;

   function checkModalWindowsState() {
      if (modalSectionOpened || modalFormOpened) {
         disableBodyScroll()
      } else {
         enableBodyScroll()
      }
   }


   


})

// Phone Mask
new InputMask({});