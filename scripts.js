const numbers = document.querySelectorAll(".number");
const numbersArray = Array.from(numbers);
const selectedRatingSpan = document.querySelector(".selected-rating");
const ratingPage = document.querySelector(".rating-content");
const thankyouPage = document.querySelector(".thank-you-content");
const container = document.querySelector(".container");

const submitButton = document.querySelector(".btn-submit");

let lastClicked = null;
let isActive = false;

function toggleActive(e) {
  lastClicked = e.target.innerHTML;
  const activeNumber = numbersArray.find(
    (number) => number.innerHTML == lastClicked
  );
  activeNumber.classList.toggle("highlight-number");

  // whether or not a selection is active
  // > affects submit button
  if (activeNumber.classList.contains("highlight-number")) {
    isActive = true;
  } else {
    isActive = false;
  }

  // untoggle current, if click on other numbers
  numbersArray.forEach((number) => {
    if (number.innerHTML !== activeNumber.innerHTML) {
      number.classList.remove("highlight-number");
    }
  });
}

function submitRating(e) {
  e.preventDefault();

  // do nothing, if no active rating selection
  if (!isActive) {
    return;
  }
  selectedRatingSpan.innerHTML = lastClicked;
  ratingPage.classList.add("hidden");
  thankyouPage.classList.remove("hidden");
}

function disableSelections(e) {
  if (!e.target.classList.contains('number')) {
    numbersArray.forEach((number) => {
      number.classList.remove("highlight-number");
    });
  }
}


submitButton.addEventListener("click", submitRating);
container.addEventListener("click", disableSelections);

numbers.forEach((number) => {
  number.addEventListener("click", toggleActive);
});
