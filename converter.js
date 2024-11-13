async function convert() {
    const usd = document.getElementById('usd').value;
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    const rate = data.rates.EUR;
    const result = usd * rate;
    document.getElementById('result').innerText = `Equivalente en EUR: ${result.toFixed(2)}`;
  }
  