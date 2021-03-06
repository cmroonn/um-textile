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
    } catch (e) {
      console.log(e);
    }
  }

  {
    try {
      const mainScreen = new Swiper(".main-screen__slider", {
        direction: "horizontal",
        simulateTouch: false,
        navigation: {
          nextEl: ".main-page .slider_next_el",
          prevEl: ".main-page .slider_prev_el",
        },
      });
    } catch (e) {
      console.log(e);
    }

    try {
      var discountsCarousel = new Swiper(".discounts__slider", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 14,
        watchOverflow: true,
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },

        pagination: {
          el: ".discounts__pagination",
          clickable: true,
        },

        navigation: {
          nextEl: ".discounts .slider_next_el",
          prevEl: ".discounts .slider_prev_el",
        },

        breakpoints: {
          1200: {
            slidesPerView: 2,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }

    try {
      const popularCarousel = new Swiper(".main-page__popular__slider", {
        direction: "horizontal",
        slidesPerView: 2,
        spaceBetween: 14,

        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },

        pagination: {
          el: ".main-page__popular .slider_pagination",
          type: "bullets",
          clickable: true,
        },

        navigation: {
          nextEl: ".main-page__popular .slider_next_el",
          prevEl: ".main-page__popular .slider_prev_el",
        },

        breakpoints: {
          1200: {
            slidesPerView: 4,

            pagination: {
              el: null,
            },
          },

          768: {
            slidesPerView: 2,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }

    try {
      const newCarousel = new Swiper(".main-page__new-products__slider", {
        direction: "horizontal",
        slidesPerView: 2,
        spaceBetween: 14,
        navigation: {
          nextEl: ".main-page__new-products .slider_next_el",
          prevEl: ".main-page__new-products .slider_prev_el",
        },

        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: {
          el: ".main-page__new-products .slider_pagination",
          type: "bullets",
          clickable: true,
        },

        breakpoints: {
          1200: {
            slidesPerView: 4,
            pagination: {
              el: null,
            },
          },

          768: {
            slidesPerView: 2,
          },
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

    try {
      const categoryTags = new Swiper(".catalog__tags .swiper-container", {
        direction: "horizontal",
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 14,
        navigation: {
          nextEl: ".slider_next_el",
          prevEl: ".slider_prev_el",
        },
        breakpoints: {
          500: {
            slidesPerView: 4,
          },

          300: {
            slidesPerView: 2,
          },
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
    } catch (e) {
      console.log(e);
    }
  }

  try {
    const allMinis = document.querySelectorAll(".item__photo-mini img");
    const bigPhoto = document.querySelector(".item__photo-big_wrap img");
    allMinis.forEach((elem) => {
      elem.addEventListener("click", () => {
        bigPhoto.src = elem.src;
        $(".item__photo-big_wrap").trigger("zoom.destroy");
        $(".item__photo-big_wrap").zoom();
      });
    });
    $(".item__photo-big_wrap").zoom();
  } catch (e) {
    console.log(e);
  }

  try {
    const catalogBtn = document.getElementById("catalogButton");
    const dropdown = document.querySelector(".dropdown_menu");

    if (window.innerWidth > 1024) {
      catalogBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let cords = catalogBtn.getBoundingClientRect();
        console.log(cords);
        dropdown.style.top = cords.top + pageYOffset + 36 + "px";
        dropdown.style.left = cords.left + pageXOffset + "px";
        dropdown.classList.toggle("show");
      });

      dropdown.addEventListener("mouseleave", (e) => {
        dropdown.classList.remove("show");
      });
    } else {
      catalogBtn.addEventListener("click", (e) => {
        e.preventDefault();
        document.addEventListener("click", (e) => {
          if (
            (e.target !== dropdown) &
            (e.target !== catalogBtn) &
            !e.target.closest(".dropdown_menu")
          ) {
            dropdown.classList.remove("show");
          }
        });
        dropdown.classList.toggle("show");
      });
    }
  } catch (e) {
    console.log(e);
  }

  try {
    const openFiltersButton = document.querySelectorAll(
      ".catalog__content__openFilters"
    );
    const filters = document.querySelector(".catalog__content__filters");

    openFiltersButton.forEach((el) => {
      el.addEventListener("click", () => {
        filters.classList.toggle("show");
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    if (window.innerWidth <= 768) {
      $(".catalog__tags__list").slick({
        slidesToShow: 2,
        arrows: true,
        slidesToScroll: 1,
        infinite: true,
        rows: 2,

        nextArrow: `<button>
                      <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.222294 13.7374C0.518686 14.0875 0.999231 14.0875 1.29562 13.7374L7 7L1.29562 0.262551C0.999229 -0.0875172 0.518684 -0.0875172 0.222293 0.262551C-0.0740978 0.612619 -0.0740977 1.18019 0.222294 1.53026L4.85335 7L0.222294 12.4697C-0.0740968 12.8198 -0.0740967 13.3874 0.222294 13.7374Z" fill="#393840"/>
                      </svg>
                    </button>`,
        prevArrow: `<button>
                      <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M6.77771 13.7374C6.48131 14.0875 6.00077 14.0875 5.70438 13.7374L-3.0598e-07 7L5.70438 0.262551C6.00077 -0.0875172 6.48132 -0.0875172 6.77771 0.262551C7.0741 0.612619 7.0741 1.18019 6.77771 1.53026L2.14665 7L6.77771 12.4697C7.0741 12.8198 7.0741 13.3874 6.77771 13.7374Z" fill="#393840"/>
                      </svg>
                    </button>`,
      });

      $(".brands__slider").slick({
        rows: 2,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        arrows: false,
        dots: true,
        dotsClass: "slider_pagination",
      });
    } else {
      $(".catalog__tags__list").slick({
        slidesToShow: 6,
        arrows: true,
        slidesToScroll: 1,
        infinite: true,
        rows: 1,

        nextArrow: `<button>
                      <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.222294 13.7374C0.518686 14.0875 0.999231 14.0875 1.29562 13.7374L7 7L1.29562 0.262551C0.999229 -0.0875172 0.518684 -0.0875172 0.222293 0.262551C-0.0740978 0.612619 -0.0740977 1.18019 0.222294 1.53026L4.85335 7L0.222294 12.4697C-0.0740968 12.8198 -0.0740967 13.3874 0.222294 13.7374Z" fill="#393840"/>
                      </svg>
                    </button>`,
        prevArrow: `<button>
                      <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M6.77771 13.7374C6.48131 14.0875 6.00077 14.0875 5.70438 13.7374L-3.0598e-07 7L5.70438 0.262551C6.00077 -0.0875172 6.48132 -0.0875172 6.77771 0.262551C7.0741 0.612619 7.0741 1.18019 6.77771 1.53026L2.14665 7L6.77771 12.4697C7.0741 12.8198 7.0741 13.3874 6.77771 13.7374Z" fill="#393840"/>
                      </svg>
                    </button>`,

        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 4,
            },

            breakpoint: 950,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      });

      $(".brands__slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        nextArrow: ".brands .slider_next_el",
        prevArrow: ".brands .slider_prev_el",
        autoplay: true,
        autoplaySpeed: 500,
        infinite: true,
        speed: 2000,
      });
    }
  } catch (e) {
    console.log(e);
  }

  try {
    $(".item__photo__minis").slick({
      responsive: [
        {
          breakpoint: 3000,
          settings: "unslick",
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            dots: true,
            dotsClass: "slider_pagination",
          },
        },
      ],
    });
  } catch (e) {
    console.log(e);
  }

  {
    const allInputs = document.querySelectorAll(
      ".cart-input input, .cart-input select"
    );
    console.log(allInputs);
    allInputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.closest(".cart-input").classList.add("focus");
      });

      input.addEventListener("blur", () => {
        input.closest(".cart-input").classList.remove("focus");
      });
    });
  }

  {
    const allColors = document.querySelectorAll(".item_color_wrap");

    allColors.forEach((color) => {
      color.addEventListener("click", () => {
        allColors.forEach((col) => col.classList.remove("active"));
        color.classList.add("active");
      });
    });
  }

  {
    const allPopups = document.querySelectorAll(".popup");
    const closePopupBtn = document.querySelectorAll(".popup__close");

    allPopups.forEach((popup) => {
      popup.addEventListener("click", (e) => {
        e.target === popup ? popup.classList.remove("show") : false;
      });

      document.addEventListener("keydown", function (e) {
        if (e.keyCode === 27) {
          popup.classList.remove("show");
        }
      });
    });

    closePopupBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.closest(".popup").classList.remove("show");
      });
    });

    const openOrderCall = document.getElementById("openOrderCall");
    const popupOrderCall = document.querySelector(".order_call");

    openOrderCall.addEventListener("click", (e) => {
      e.preventDefault();
      popupOrderCall.classList.add("show");
    });
  }

  // Inputs validation cart

  {
    try {
      const form = document.querySelector(".cart");
      const submit = document.getElementById("cartSubmit");
      const emailInput = document.querySelector("input[name='email']");
      const fields = document.querySelectorAll(".cart .field");
      const telInput = document.getElementById("phone_field");

      console.log(emailInput);
      let rules = {
        email: {
          email: true,
          required: true,
        },

        required: {
          required: true,
        },
      };

      const validate = () => {
        if (!approve.value(emailInput.value, rules.email).approved) {
          emailInput.parentElement.classList.add("error");
        } else {
          emailInput.parentElement.classList.remove("error");
        }

        console.log(telInput.value.length);

        for (var i = 0; i < fields.length; i++) {
          if (!approve.value(fields[i].value, rules.required).approved) {
            fields[i].parentElement.classList.add("error");
          } else {
            fields[i].parentElement.classList.remove("error");
          }
        }

        if (telInput.value.length < 16) {
          telInput.parentElement.classList.add("error");
          console.log("added");
        } else {
          telInput.parentElement.classList.remove("error");
        }
        let errors = document.querySelectorAll(".cart .cart-input.error");

        if (errors.length <= 0) {
          return true;
        } else {
          errors[0].focus();
          errors.forEach((error) => {
            const input = error.querySelector("input");
            input.addEventListener("keyup", (e) => {
              // if input has been changed remove class error

              console.log(input.value);
              if (input.value !== "") {
                error.classList.remove("error");
              } else {
                error.classList.add("error");
              }
            });
          });
          return false;
        }
      };

      // On submit
      submit.addEventListener("click", (e) => {
        e.preventDefault();
        validate();

        if (validate()) {
          $.ajax({
            method: "POST",
            url: "sender.php",
          });
        } else {
          return false;
        }
      });

      // Allow only "-" and digits

      const disableLetters = (input) => {
        let val = input.value;
        let rep = /[\.;":'a-zA-Zа-яА-Я]/;

        if (rep.test(val)) {
          val = val.replace(rep, "");
          input.value = val;
        }
      };

      const inputsDisableLetters = document.querySelectorAll(
        "input[name='apartament']"
      );

      inputsDisableLetters.forEach((input) => {
        input.addEventListener("keyup", () => {
          disableLetters(input);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  try {
    const phoneMask = IMask(document.getElementById("phone_field"), {
      mask: "+{7}(000)000-00-00",
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const orderPhone = IMask(document.getElementById("phone_fieldd"), {
      mask: "+{7}(000)000-00-00",
    });
  } catch (e) {
    console.log(e);
  }

  // Validate inputs on catalog page

  {
    try {
      const telInput = document.getElementById("phone_field");
      const submitBtn = document.getElementById("submitCatalogForm");

      const validate = () => {
        if (telInput.value.length < 16) {
          telInput.parentElement.classList.add("error");
          console.log("added");
        } else {
          telInput.parentElement.classList.remove("error");
        }
        let errors = document.querySelectorAll(".cart .cart-input.error");

        if (errors.length <= 0) {
          return true;
        } else {
          errors[0].focus();
          errors.forEach((error) => {
            const input = error.querySelector("input");
            input.addEventListener("keyup", (e) => {
              // if input has been changed remove class error

              console.log(input.value);
              if (input.value !== "") {
                error.classList.remove("error");
              } else {
                error.classList.add("error");
              }
            });
          });
          return false;
        }
      };

      submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        validate();

        if (validate()) {
          $.ajax({
            method: "POST",
            url: "sender.php",
          });
        } else {
          return false;
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  // Validate inputs in order call popup

  {
    try {
      const telInput = document.getElementById("phone_fieldd");
      const submitBtn = document.getElementById("orderCallSubmit");

      const validate = () => {
        if (telInput.value.length < 16) {
          telInput.parentElement.classList.add("error");
          console.log("added");
        } else {
          telInput.parentElement.classList.remove("error");
        }
        let errors = document.querySelectorAll(".cart .cart-input.error");

        if (errors.length <= 0) {
          return true;
        } else {
          errors[0].focus();
          errors.forEach((error) => {
            const input = error.querySelector("input");
            input.addEventListener("keyup", (e) => {
              // if input has been changed remove class error

              console.log(input.value);
              if (input.value !== "") {
                error.classList.remove("error");
              } else {
                error.classList.add("error");
              }
            });
          });
          return false;
        }
      };

      submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        validate();

        if (validate()) {
          $.ajax({
            method: "POST",
            url: "sender.php",
          });
        } else {
          return false;
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
});
