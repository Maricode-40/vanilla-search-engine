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

  /**
   * selecting id to construct an image element base on the condition url
   *  from the weather app then we inyected into the icon element
   */

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

  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"/>`;
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
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

let form = document.querySelector("#searchTab");
form.addEventListener("submit", search);

/**
 * Method  need to returns a collection of elements with the given name.
 * The event listener function on click will log-"click" to the console &
 *  then call the function.
 */
