// Get a reference to the submit button and the thankyou-container
const submitBtn = document.querySelector(".submit-btn");
const mainContainer = document.querySelector(".main-card-container");
const thankyouContainer = document.querySelector(".thankyou-card-container");
const rateAgainBtn = document.querySelector(".rate-again-btn");
const ratings = document.querySelectorAll(".rating");
const ratingGiven = document.querySelector(".rating-given span");

ratings.forEach((rating) => {
  rating.addEventListener("click", function () {
    ratings.forEach((r) => r.classList.remove("selected-rating"));
    rating.classList.add("selected-rating");
    console.log(rating.classList);
    ratingGiven.textContent = rating.textContent;
  });
});

// Add a click event listener to the submit button
submitBtn.addEventListener("click", function () {
  // Toggle the visibility of the thankyou-container by adding/removing the "hidden" class
  mainContainer.classList.add("hidden");
  thankyouContainer.classList.remove("hidden");
});

rateAgainBtn.addEventListener("click", function () {
  // Toggle the visibility of the thankyou-container by adding/removing the "hidden" class
  ratings.forEach((rating) => {
    rating.classList.remove("selected-rating");
  });
  mainContainer.classList.remove("hidden");
  thankyouContainer.classList.add("hidden");
});