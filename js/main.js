function showTemperature(response) {
  console.log(response.data.city);
  console.log(response.data.temperature);
}
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Sydney&key=46f53o0114a0et1fb464bc0d734f573e";

axios.get(apiUrl).then(showTemperature);

/**
 * event my object to change input
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
