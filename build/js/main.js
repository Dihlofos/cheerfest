"use strict";
(function () {
  const buttons = document.querySelectorAll('.activities__buttons .primary-btn');
  const lists = document.querySelectorAll('.activities__list');

  const showScene = (scene) => {
    lists.forEach(list => {
      list.hidden = list.dataset.scene !== scene;
    });

    buttons.forEach(button => {
      button.classList.toggle('primary-btn--active', button.dataset.scene === scene);
    });
  };

  const initial = document.querySelector('.primary-btn--active')?.dataset.scene;
  if (initial) {
    showScene(initial);
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      showScene(button.dataset.scene);
    });
  });

  const moreButtons = document.querySelectorAll('.map__more');
  moreButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetScene = btn.dataset.scene;
      const activitiesSection = document.querySelector('#activities');

      if (activitiesSection) {
        activitiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
          showScene(targetScene);
        }, 400); 
      }
    });
  });
})();

// "use strict";
// (function () {
//   let upButton = document.querySelector(".up");

//   if (upButton) {
//     window.onscroll = function () {
//       if (window.pageYOffset > 260) {
//         upButton.classList.add("up--shown");
//       } else {
//         upButton.classList.remove("up--shown");
//       }
//     };
//   }
// })();


"use strict";
(function () {
  const upButton = document.querySelector(".up");

  if (!upButton) return;

  const mobileBreakpoint = 768;
  const defaultBottom = 30;
  const raisedBottom = 30;
  const footerBuffer = 400;

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const distanceToBottom = docHeight - (scrollY + windowHeight);

    if (scrollY > 260) {
      upButton.classList.add("up--shown");
    } else {
      upButton.classList.remove("up--shown");
    }

    if (window.innerWidth <= mobileBreakpoint) {
      if (distanceToBottom < footerBuffer) {
        upButton.style.bottom = `${raisedBottom}px`;
      } else {
        upButton.style.bottom = `${defaultBottom}px`;
      }
    } else {
      upButton.style.bottom = "";
    }
  });
})();


"use strict";
(function () {
  const key = "maraphon-cookie-modal-shown";
  let modal = document.querySelector(".js-cookie");
  if (!modal) {
    return;
  }

  let closeButton = modal.querySelector(".js-cookie-close");

  if (!window.localStorage.getItem(key)) {
    modal.classList.remove("hidden");
  }

  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    window.localStorage.setItem(key, true);
  });
})();

// "use strict";
// (function () {
//   const dropdowns = document.querySelectorAll(".js-dropdown");

//   if (!dropdowns.length) {
//     return;
//   }

//   dropdowns.forEach((dropdown) => {
//     const trigger = dropdown.querySelector(".js-dropdown-trigger");

//     trigger.addEventListener("click", () => {
//       dropdown.classList.toggle("open");
//     });
//   });
// })();

"use strict";
(function () {
  const togglers = document.querySelectorAll(".js-faq-toggler");
  if (!togglers.length) return;

  togglers.forEach((toggler) => {
    toggler.addEventListener("click", (event) => {
      const target = event.currentTarget;
      if (!target) return;

      // ZONES 
      const zoneItem = target.closest(".zones__item");
      const content = target.nextElementSibling;

      if (zoneItem) {
        document.querySelectorAll(".zones__item").forEach((otherItem) => {
          if (otherItem !== zoneItem) {
            otherItem.classList.remove("active");
            const otherContent = otherItem.querySelector(".zones__content");
            const otherButton = otherItem.querySelector(".zones__toggler");
            otherContent?.classList.remove("active");
            otherButton?.classList.remove("active");
          }
        });

        target.classList.toggle("active");
        content?.classList.toggle("active");
        zoneItem.classList.toggle("active");
        return; 
      }

      // FAQ 
      const faqItem = target.closest(".faq__item");
      const faqContent = target.nextElementSibling;

      target.classList.toggle("active");
      faqContent?.classList.toggle("active");
      faqItem?.classList.toggle("active");
    });
  });
})();

// "use strict";
// (function () {
//   const nav = document.querySelector('.js-nav');
//   const toggler = nav.querySelector('.js-nav-toggler');
//   const closeButton = nav.querySelector('.js-nav-close');
//   const links = nav.querySelectorAll('.js-scroll');

//   toggler.addEventListener('click', () => {
//     nav.classList.toggle('is-active');
//   })

//   links.forEach((link) => {
//     link.addEventListener('click', () => {
//       closeNav();
//     })
//   })

//   function closeNav() {
//     nav.classList.remove('is-active');
//   }

// })();

(function () {
  const nav = document.querySelector(".js-nav");
  const toggler = nav.querySelector(".js-nav-toggler");
  const closeButton = nav.querySelector(".js-nav-close");
  const links = nav.querySelectorAll(".js-scroll");
  const headerContainer = document.querySelector(".header__container");
  const header = document.querySelector(".js-header");

  toggler.addEventListener("click", () => {
    nav.classList.toggle("is-active");
    headerContainer.classList.toggle("nav-open");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  });

  function closeNav() {
    nav.classList.remove("is-active");
    headerContainer.classList.remove("nav-open");
  }
})();

// "use strict";
// (function () {
//   const slider = document.querySelector(".js-people-slider-concert-container");
//   const vw = window.innerWidth;
//   const wrapper = slider.querySelector(".swiper-wrapper");

//   if (wrapper.childNodes.length > 3 && vw >= 744) {
//     new Swiper(`.js-people-slider-concert`, {
//       // Optional parameters
//       slidesPerView: 3,
//       spaceBetween: 30,
//       initialSlide: 0,
//       draggable: false,
//       pagination: false,
//       loop: false,
//       navigation: {
//         nextEl: ".js-people-next-concert",
//         prevEl: ".js-people-prev-concert",
//       },
//     });
//   } else {
//     slider.classList.add("disabled");
//   }
// })();

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();
