const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'A pair of warm, fuzzy socks.',
      image: {src: './assets/images/socks_blue.jpg', alt: 'blue socks'},
      inventory: 8,
      isOnSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [{id: 1, color: 'blue'}, {id: 2, color: 'green'}]
    }
  }
});