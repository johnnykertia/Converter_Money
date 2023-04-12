let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
let fromDropdown = document.getElementById("from-converter-uang");
let toDropdown = document.getElementById("to-converter-uang");

// Create dropdown from array currience
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropdown.add(option);
});

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropdown.add(option);
});

//
fromDropdown.value = "USD";
toDropdown.value = "INR";

//
let currenConvert = () => {
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropdown.value;
  const toCurrency = toDropdown.value;

  if (amount.length != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let dataFromChange = data.conversion_rates[fromCurrency];
        let dataToChange = data.conversion_rates[toCurrency];
        const resultAmount = (amount / dataFromChange) * dataToChange;
        result.innerHTML = `${amount} ${fromCurrency} = ${resultAmount.toFixed(
          2
        )} ${toCurrency}`;
      });
  } else {
    alert("No Okey ");
  }
};

document
  .querySelector("#converter-btn")
  .addEventListener("click", currenConvert);
window.addEventListener("load", currenConvert);
