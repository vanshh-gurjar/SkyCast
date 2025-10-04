import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [City, setCity] = useState("");
  const api_url = "https://api.openweathermap.org/data/2.5/weather";
  const api_key = "e84464b35a5d33d71a44cf9940c2a275";

  let getWeatherInfo = async (cityName) => {
    try {
      let response = await fetch(`${api_url}?q=${cityName}&appid=${api_key}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      // agar galat city hai
      if (jsonResponse.cod !== 200) {
        alert("City not found! Please try again.");
        return null;
      }

      let result = {
        cityName: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(City);
    let newInfo = await getWeatherInfo(City);
    if (newInfo) {
      updateInfo(newInfo);
    }
    setCity(""); // input box reset
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={City}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
