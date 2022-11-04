{

  const welcome = () => {
    console.log("Witam serdecznie wszystkich developerów, którzy tu zaglądają.")
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const currency1Element = document.querySelector(".js-currency1");
    const currency2Element = document.querySelector(".js-currency2");
    const resultElement = document.querySelector(".js-result");

    const currency1 = currency1Element.value;
    const currency2 = currency2Element.value;

    let result = currency1 * currency2;
    resultElement.innerText = result.toFixed(4);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);

    welcome();

  };

  init();

}



