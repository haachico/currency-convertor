"use strict";

const typeCurrencyOne = document.querySelector(".currency-1-select");
const typeCurrencyTwo = document.querySelector(".currency-2-select");
const valueCurrencyOne = document.querySelector(".currency-1-values");
const valueCurrencyTwo = document.querySelector(".currency-2-values");
const exchangeRate = document.querySelector(".exchange-rate");

function convertCurency() {
  const currencyOne = typeCurrencyOne.value;
  const currencyTwo = typeCurrencyTwo.value;
  //   let currencyOneValue = valueCurrencyOne.value;
  //   let currencyTwoValue = valueCurrencyTwo.value;
  fetch(
    `https://v6.exchangerate-api.com/v6/16947c81da979880bacde4f5/latest/${currencyOne}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const rate = data.conversion_rates[currencyTwo];

      exchangeRate.innerText = `*1 ${currencyOne} = ${rate} ${currencyTwo}`;
      valueCurrencyTwo.value = (rate * valueCurrencyOne.value).toFixed(5);
    });
}
convertCurency();

typeCurrencyOne.addEventListener("change", convertCurency);
typeCurrencyTwo.addEventListener("change", convertCurency);
valueCurrencyOne.addEventListener("input", convertCurency);
valueCurrencyTwo.addEventListener("input", convertCurency);
