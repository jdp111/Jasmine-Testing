window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  let amount = 400000;
  let years = 30;
  let rate = 3.5;
  
  
  function setupIntialValues() {
    document.querySelector("#loan-amount").value = amount;
    document.querySelector("#loan-years").value = years;
    document.querySelector("#loan-rate").value = rate;
    document.getElementById("monthly-payment").innerText = "$1796.18";
  }
  //console.log(amount);
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    amount = document.querySelector("#loan-amount").value;
    years = document.querySelector("#loan-years").value;
    rate = document.querySelector("#loan-rate").value;
    let Vals = [amount, years, rate];
    let monthly = calculateMonthlyPayment(Vals);
    document.getElementById("monthly-payment").innerText = monthly;
  
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    let P = values[0];
    let n = values[1] *12;
    let i= values[2] /12 /100;
    let top = P*i;
    let Bot = 1 - ((1 + i)**(-n));
    let ValF = top/Bot;
    let rounded = Math.round(ValF * 100) / 100;
    return ("$" + rounded);
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
  }
  