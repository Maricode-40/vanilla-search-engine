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
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humitidyElement = document.querySelector("#humidity");
  humitidyElement.innerHTML = `Humidity ${response.data.temperature.humidity}%`;

  let speedyElement = document.querySelector("#speedy");
  speedyElement.innerHTML = ` Wind: ${response.data.wind.speed} km/h`;

  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);
  console.log(response.data);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

let form = document.querySelector("#searchTab");
form.addEventListener("submit", search);

/**
 * method  need to returns a collection of elements with the given name.
 * Then,.... event listener function on click will log-"click" to the console &
 *  call the function
 */
