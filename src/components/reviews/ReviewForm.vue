<template>
    <div class="review-form">
      <div class="title">Leave a Review</div>
      <form @submit.prevent="submitReview">
        <div class="input-box">
          <span class="details">Rating</span>
          <select v-model="rating" required>
            <option disabled value="">Select a rating</option>
            <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>
        <div class="input-box">
          <span class="details">Comment</span>
          <textarea v-model="comment" placeholder="Write your comment here" required></textarea>
        </div>
        <div class="button">
          <input type="submit" value="Submit Review">
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { api } from 'boot/axios';
  
  export default {
    name: "ReviewForm",
    props: {
      activityId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        rating: "",
        comment: "",
      }
    },
    methods: {
      submitReview() {
        let review = {
          rating: this.rating,
          comment: this.comment,
          activityId: this.activityId,
          userId: 1 // Aquí deberías utilizar el ID del usuario autenticado
        }
        api.post('/reviews', review)
          .then(response => {
            this.$q.notify({
              message: "Review submitted successfully",
              color: "positive",
              position: "bottom",
              timeout: 5000
            })
            this.$router.push(`/activities/${this.activityId}`)
          }).catch(error => {
            console.log("Error:", error)
            this.$q.notify({
              message: "An error occurred while submitting the review",
              color: "negative",
              position: "top",
              timeout: 5000
            })
          })
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos para el formulario de reseña */
  .review-form {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .review-form .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .review-form .input-box {
    margin-bottom: 20px;
  }
  
  .review-form .input-box span.details {
    display: block;
    margin-bottom: 5px;
  }
  
  .review-form .input-box input,
  .review-form .input-box select,
  .review-form .input-box textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .review-form .button {
    text-align: center;
  }
  
  .review-form .button input {
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  