app.component('review-form', {
  template:
    /* html */
    `
    <form class='review-form' @submit.prevent='onSubmit'>
      <h3>Leave a review</h3>

      <label for="name">Name:</label>
      <input type="text" id="name" v-model='name'>

      <label for="review">Review:</label>
      <textarea id="review" v-model='review'></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number='rating'>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>

      <p>Would you recommend this product?</p>
      <label for="recommended">Yes</label>
      <input type='radio' id="recommended" v-model='recommended' value='yes'>
      <label for="not-recommended">No</label>
      <input type='radio' id="not-recommended" v-model='recommended' value='no'>

      <input type='submit' class='button' value='Submit' />
    </form>
  `,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommended: null,
    };
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.rating === null) {
        alert('Review is incomplete. Please fill out all fields');
        return;
      }

      const productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommended: this.recommended,
      };

      this.$emit('review-submitted', productReview);

      this.name = '';
      this.review = '';
      this.rating = null;
      this.recommended = null;
    },
  },
});
