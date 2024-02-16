/**
 * event the object to change input
 */

function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");

  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}...`;
  } else {
    h1.innerHTML = "";
    alert("Please type a city");
  }
}

let form = document.querySelector("#searchTab");
form.addEventListener("submit", search);

/**
 * calling api axios
 */

let city = "Sydney";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=${city}&key=46f53o0114a0et1fb464bc0d734f573e";

function showTemperature(response) {
  console.log(response);
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  console.log(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;

  console.log(response.data.city);
}

axios.get(apiUrl).then(showTemperature);

/**
 * method  need to returns a collection of elements with the given name.
 * Then,.... event listener function on click will log-"click" to the console &
 *  call the function - go UP to keep fixing code
 */
