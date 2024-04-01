// Most popular brand

const brandlogo = new Splide("#brand-logo", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 5,
  // autoplay: true,
  interval: 4000,
});

brandlogo.mount();
