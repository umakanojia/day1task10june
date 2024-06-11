

const exchangeRates = {
    country1: 88.50,  // Germany (Euro to INR)
    country2: 82.00,  // USA (USD to INR)
    country3: 0.75,   // Japan (Yen to INR)
    country4: 89.50   // Italy (Euro to INR)
  };
  
  function convert() {
    const country = document.getElementById('country').value;
    const amount = document.getElementById('amount').value;
    const exchange = document.getElementById('exchange');
  
    if (amount <= 0) {
      alert('Please enter amount greater than 0.');
      return;
    }
  
    const rate = exchangeRates[country];
    const convertedAmount = amount * rate;
  
    // Clear previous results
    exchange.innerHTML = '';
  
    const listItem = document.createElement('li');
    listItem.textContent = `Converted Amount: ${convertedAmount.toFixed(2)} INR`;
    exchange.appendChild(listItem);
  }
  
  function end() {
    alert('Currency conversion is complete.');
  }
  

  //ECS 18 UMA KANOJIA