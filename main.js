const app = Vue.createApp({
  data() {
    return {
      cart: {},
      premium: true,
    };
  },
  methods: {
    addToCart(id) {
      this.cart[id] ? this.cart[id]++ : this.cart[id] = 1;
    },
    removeFromCart(id) {
      if (!this.cart[id]) {
        return;
      }
      this.cart[id]--;
    },
  },
});
