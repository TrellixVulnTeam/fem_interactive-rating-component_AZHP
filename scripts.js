const numbers = document.querySelectorAll(".number");
const numbersArray = Array.from(numbers);
const selection = document.querySelector(".selection");
const ratingPage = document.querySelector(".rating-content");
const thankyouPage = document.querySelector(".thank-you-content");

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
  } else isActive = false;

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
  selection.innerHTML = lastClicked;
  ratingPage.classList.add("hidden");
  thankyouPage.classList.remove("hidden");
}

submitButton.addEventListener("click", submitRating);

numbers.forEach((number) => {
  number.addEventListener("click", toggleActive);
});
