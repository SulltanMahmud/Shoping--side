// Most popular brand

const brandlogo = new Splide("#brand-logo", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 5,
  
  // autoplay: true,
  interval: 5000,
  breakpoints: {
    576: {
      perPage: 1,
    },

    992: {
      perPage: 2,
    },

    1200: {
      perPage: 3,
    },
  },
});

brandlogo.mount();
