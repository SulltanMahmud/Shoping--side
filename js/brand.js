// Most popular brand

const brandlogo = new Splide("#brand-logo", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 5,
  perMove:1,
  autoplay: true,
  interval: 5000,
  arrows:true,
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

 