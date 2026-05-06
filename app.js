(function () {
  var GALLON_TO_LITERS = 3.78541;

  var form = document.getElementById('compare-form');
  var costLiterInput = document.getElementById('cost-liter');
  var costGallonInput = document.getElementById('cost-gallon');

  var gallonPerLiterEl = document.getElementById('gallon-per-liter');
  var differenceEl = document.getElementById('difference');
  var winnerEl = document.getElementById('winner');

  var formatCurrency = function (value) {
    return '$' + value.toFixed(4);
  };

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var costPerLiter = parseFloat(costLiterInput.value);
    var costPerGallon = parseFloat(costGallonInput.value);

    if (isNaN(costPerLiter) || isNaN(costPerGallon) || costPerLiter < 0 || costPerGallon < 0) {
      winnerEl.textContent = 'Introduce valores válidos (0 o mayores).';
      gallonPerLiterEl.textContent = '—';
      differenceEl.textContent = '—';
      return;
    }

    var gallonConvertedToLiter = costPerGallon / GALLON_TO_LITERS;
    var difference = Math.abs(costPerLiter - gallonConvertedToLiter);

    gallonPerLiterEl.textContent = formatCurrency(gallonConvertedToLiter);
    differenceEl.textContent = formatCurrency(difference);

    if (costPerLiter < gallonConvertedToLiter) {
      winnerEl.textContent = '✅ Comprar por litro sale más barato por litro.';
    } else if (costPerLiter > gallonConvertedToLiter) {
      winnerEl.textContent = '✅ Comprar por galón sale más barato por litro.';
    } else {
      winnerEl.textContent = '🤝 Ambos cuestan lo mismo por litro.';
    }
  });
})();
