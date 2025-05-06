app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image.src" :alt="image.alt" :class='{"out-of-stock-img": inventory === 0}' />
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory < 10 && inventory > 0">Almost sold out</p>
            <p v-else>Out of Stock</p>
            <p>Shipping {{ shipping }}</p>
            <product-details :details="details"></product-details>
            <ul>
              <li
                v-for="(variant, index) in variants"
                :key="variant.id"
                @mouseover="selectProduct(index)"
                class="color-circle"
                :style='{ backgroundColor: variant.color}'
              />
            </ul>
            <button @click="addProduct" class="button" :class='{disabledButton: !isInStock}' :disabled='!isInStock'>Add to Cart</button>
            <button @click="removeFromCart" class="button">Remove From Cart</button>
          </div>
        </div>
      </div>
    `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      description: 'A pair of warm, fuzzy socks.',
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: { src: './assets/images/socks_green.jpg', alt: 'green socks' },
          quantity: 8,
          isOnSale: true,
        },
        {
          id: 2235,
          color: 'blue',
          image: { src: './assets/images/socks_blue.jpg', alt: 'blue socks' },
          quantity: 100,
          isOnSale: false,
        },
      ],
      selectedProduct: 0,
    };
  },
  methods: {
    addProduct() {
      this.$emit('add-product', this.variants[this.selectedProduct].id);
    },
    removeFromCart() {
      this.$emit('remove-product', this.variants[this.selectedProduct].id);
    },
    selectProduct(id) {
      this.selectedProduct = id;
    },
  },
  computed: {
    title() {
      return this.isOnSale ? `${this.brand} ${this.product} is on sale` : `${this.brand} ${this.product}`;
    },
    inventory() {
      return this.variants[this.selectedProduct].quantity;
    },
    isInStock() {
      return this.variants[this.selectedProduct].quantity > 0;
    },
    isOnSale() {
      return this.variants[this.selectedProduct].isOnSale;
    },
    image() {
      return this.variants[this.selectedProduct].image;
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }

      return 2.99;
    }
  },
});
