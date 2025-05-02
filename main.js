const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'A pair of warm, fuzzy socks.',
      image: {src: './assets/images/socks_blue.jpg', alt: 'blue socks'},
      inventory: 0,
      isOnSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
      ],
      cart:0,
    }
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart--;
      }
    },
    updateImage(imageSrc) {
      this.image.src = imageSrc;
    }
  }
});