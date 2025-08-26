celsiusE1 = document.getElementById("Celsius");
FahrenheitE1 = document.getElementById("Fahrenheit");
kelvinE1 = document.getElementById("Kelvin");

function computeTemp() {
  // ADD + TO AVOID STRING PROBLEM
  const currentValue = +event.target.value;
  switch (event.target.name) {
    case "Celsius":
      kelvinE1.value = currentValue + 273.15;
      FahrenheitE1.value = currentValue * 1.8 + 32;
      break;

    case "Fahrenheit":
      celsiusE1.value = (currentValue - 32) / 1.8;
      kelvinE1.value = (currentValue - 32) / 1.8 + 273.15;
      break;

    case "Kelvin":
      celsiusE1.value = currentValue - 273.15;
      FahrenheitE1.value = (currentValue - 273.15) * 1.8 + 32;
  }
}
