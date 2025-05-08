app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true,
    }
  },
  template:
    /* html */
    `
      <div class='review-container'>
        <h3>Reviews:</h3>
        <div v-for='(review, index) in reviews' :key='index'>
          <span>{{review.name}} gave this {{review.rating}} stars</span><span v-if='review.recommended === "yes"'> and recommends this</span><span v-if='review.recommended === "no"'> and doesn't recommend this</span>
          <p>{{review.review}}</p>
        </div>
      </div>

    `,
});