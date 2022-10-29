let currency1Element = document.querySelector(".js-currency1");
let currency2Element = document.querySelector(".js-currency2");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currency1 = currency1Element.value;
  let currency2 = currency2Element.value;


  let result = currency1 * currency2;

  resultElement.innerText = result.toFixed(4);

});

