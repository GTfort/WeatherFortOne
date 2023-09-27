let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

let getWeather = () => {
  let city = cityRef.value;
  if (city.length == 0) {
    result.innerHTML = `
     <h2>Input field cannot be left blank</h2>
     `;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?&appid=${base_key}&units=metric&q=${city}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp}<span>&#176;<span></h1>
        <div class="temp-container">
          <div>
            <h4 class="title">min</h4>
            <h4 class="temp">${data.main.temp_min}<span>&#176;<span></h4>
          </div>
          <div>
            <h4 class="title">max</h4>
            <h4 class="temp">${data.main.temp_max}<span>&#176;<span></h4>
          </div>
        </div>
        `;
      })
      .catch(() => {
        result.innerHTML = `
          <h3 class="msg">City not found</h3>
        `;
      });
  }
};

searchBtn.addEventListener("click", getWeather);

window.addEventListener("load", getWeather);

// let loader = () => {
//   const loader = document.querySelector(".loader");

//   loader.classList.add("loader-hidden");

//   loader.addEventListener("transitioned", () => {
//     document.body.removeChild("loader");
//   });
// };
