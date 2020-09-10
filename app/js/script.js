"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Show searchbar
  {
    try {
      const button = document.getElementById("showSearchbar"),
        searchbar = document.getElementById("searchbar"),
        closeButton = document.getElementById("closeSearchbar"),
        searchInput = searchbar.querySelector("input");

      button.addEventListener("click", (e) => {
        e.preventDefault();
        searchbar.classList.add("show");
      });

      closeButton.addEventListener("click", (e) => {
        searchInput.value !== ""
          ? (searchInput.value = "")
          : searchbar.classList.remove("show");
      });
    } catch {}
  }

  {
    try {
      const mainScreen = new Swiper(".main-screen__slider", {
        direction: "horizontal",

        navigation: {
          nextEl: ".slider_next_el",
          prevEl: ".slider_prev_el",
        },
      });
    } catch (e) {
      console.log(e);
    }

    try {
      var discountsCarousel = new Swiper(".discounts__slider", {
        direction: "horizontal",
        slidesPerView: 2,
        spaceBetween: 14,
        watchOverflow: true,
        navigation: {
          nextEl: ".slider_next_el",
          prevEl: ".slider_prev_el",
        },

        pagination: {
          el: ".discounts__pagination",
          clickable: true,
        },
      });
    } catch (e) {
      console.log(e);
    }

    try {
      const popularCarousel = new Swiper(".main-page__popular__slider", {
        direction: "horizontal",
        slidesPerView: 4,
        spaceBetween: 14,
        navigation: {
          nextEl: ".slider_next_el",
          prevEl: ".slider_prev_el",
        },
      });
    } catch (e) {
      console.log(e);
    }

    try {
      const popularCarousel = new Swiper(".main-page__new-products__slider", {
        direction: "horizontal",
        slidesPerView: 4,
        spaceBetween: 14,
        navigation: {
          nextEl: ".slider_next_el",
          prevEl: ".slider_prev_el",
        },
      });
    } catch (e) {
      console.log(e);
    }

    try {
      const brandsCarousel = new Swiper(".brands__slider", {
        direction: "horizontal",
        slidesPerView: 6,
        spaceBetween: 14,
        navigation: {
          nextEl: ".slider_next_el",
          prevEl: ".slider_prev_el",
        },
      });
    } catch (e) {
      console.log(e);
    }

    try {
      const itemInteresting = new Swiper(".item__interesting_slider", {
        direction: "horizontal",
        slidesPerView: 4,
        spaceBetween: 14,
        navigation: {
          nextEl: ".slider_next_el",
          prevEl: ".slider_prev_el",
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  {
    try {
      const allTabs = document.querySelectorAll(".item__data__tabs li");
      const allBlocks = document.querySelectorAll(".item__data__content_point");

      allTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          allTabs.forEach((el) => el.classList.remove("active"));
          tab.classList.add("active");
          const tabId = tab.dataset.tab;

          allBlocks.forEach((block) => {
            block.classList.remove("show");
            block.dataset.tab === tabId ? block.classList.add("show") : false;
          });
        });
      });
    } catch {}
  }

  {
    try {
      const allFilters = document.querySelectorAll(".filter_block__heading");
      const allFiltersPoints = document.querySelectorAll(
        ".filter_block__points"
      );
      allFilters.forEach((filter) => {
        filter.addEventListener("click", (e) => {
          allFiltersPoints.forEach((points) => {
            if (
              points.closest(".filter_block") ===
              filter.closest(".filter_block")
            ) {
              filter.parentElement.classList.toggle("show");
            }
          });
        });
      });
    } catch {}
  }
});
