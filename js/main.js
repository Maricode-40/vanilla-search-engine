/**
 * event funtion is my object  tha will  change my input
 */

function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-text-input");
  let cityElement = document.querySelector("#temperature");
  let h1 = document.querySelector("h1");

  let city = searchInput.value;
  /**
   * calling api axios
   */
  if (city) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=46f53o0114a0et1fb464bc0d734f573e&units=metric`;

    axios.get(apiUrl).then(showTemperature);
    cityElement.innerHTML = city;
    h1.innerHTML = `${city}...`;
  } else {
    cityElement.innerHTML = "";
    h1.innerHTML = "";
    alert("Please enter a city");
  }
}

function showTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#temperature");
  cityElement.innerHTML = temperature + "°";
}

let form = document.querySelector("#searchTab");
form.addEventListener("submit", search);

/**
 * method  need to returns a collection of elements with the given name.
 * Then,.... event listener function on click will log-"click" to the console &
 *  call the function
 */
