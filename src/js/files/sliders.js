import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

if (window.matchMedia("(max-width: 479px)").matches) {
  const slider = document.querySelector(".stages__slider");
  const items = slider.querySelectorAll(".stages__slider-item");

  slider.classList.add("swiper");
  items.forEach((i) => i.classList.add("swiper-slide"));

  const stagesSlider = new Swiper(".stages__slider", {
    spaceBetween: 20,
    modules: [Navigation, Pagination],
    grabCursor: true,
    speed: 800,
    observer: true,
    observeParents: true,
    autoHeight: true,
    navigation: {
      nextEl: ".stages__slider-nav .slider-button--next",
      prevEl: ".stages__slider-nav .slider-button--prev",
    },
    pagination: {
      el: ".stages__slider-nav .slider-pagination",
      type: "bullets",
      clickable: true,
    },
  });
}

const participantsSlider = new Swiper(".participants__slider", {
  spaceBetween: 20,
  modules: [Navigation, Pagination, Autoplay],
  autoplay: {
    delay: 4000
  },
  grabCursor: true,
  speed: 800,
  breakpoints: {
    993: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2
    }
  },
  navigation: {
    nextEl: ".participants__slider-nav .slider-button--next",
    prevEl: ".participants__slider-nav .slider-button--prev",
  },
  pagination: {
    el: ".participants__slider-fraction",
    type: "fraction",
    renderFraction: (currentClass, totalClass) => {
      return `
          <span class="slider-current-slide ${currentClass}"></span>
          <span>/</span>
          <span class="slider-all-slide ${totalClass}"></span>
      `;
    },
  },
});
