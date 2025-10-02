const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "06edb1e42b3c752238c20eb87d916284";

weatherform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityinput.value;

  if (city) {
    try {
      const weatherdata = await getweatherdata(city);
      displayweatherinfo(weatherdata);
    } catch (error) {
      console.log(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getweatherdata(city) {
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const repsonse = await fetch(apiurl);

  if (!repsonse.ok) {
    throw new Error("Could not fetch weather data");
  }

  return await repsonse.json();
}

function displayweatherinfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const citydisp = document.createElement("h1");
  const tempdisp = document.createElement("p");
  const humidisp = document.createElement("p");
  const descdisp = document.createElement("p");
  const weatheremojidisp = document.createElement("p");

  citydisp.textContent = city;
  tempdisp.textContent = `${((temp - 273.15) * (9 / 5) + 32).toFixed(1)}°K`;
  humidisp.textContent = `Humidity: ${humidity}%`;
  descdisp.textContent = description;
  weatheremojidisp.textContent = getweatheremoji(id);

  citydisp.classList.add("citydisplay");
  tempdisp.classList.add("tempdisplay");
  humidisp.classList.add("humidisplay");
  descdisp.classList.add("descdisplay");
  weatheremojidisp.classList.add("weatheremoji");

  card.appendChild(citydisp);
  card.appendChild(tempdisp);
  card.appendChild(humidisp);
  card.appendChild(descdisp);
  card.appendChild(weatheremojidisp);
}

function getweatheremoji(weatherid) {
  switch (true) {
    case weatherid >= 200 && weatherid < 300:
      return "🌧️";
    case weatherid >= 300 && weatherid < 400:
      return "🌧️";
    case weatherid >= 400 && weatherid < 500:
      return "🌧️";
    case weatherid >= 500 && weatherid < 600:
      return "❄️";
    case weatherid >= 600 && weatherid < 700:
      return "❄️";
    case weatherid >= 700 && weatherid < 800:
      return "🌁";
    case weatherid === 800:
      return "☀️";
    case weatherid >= 800 && weatherid < 810:
      return "☁️";
    default:
      return "❓";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errordisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
