const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'A pair of warm, fuzzy socks.',
      image: {src: './assets/images/socks_blue.jpg', alt: 'blue socks'},
    }
  }
});