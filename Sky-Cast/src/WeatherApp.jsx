import { useState } from "react";
import InfoBox from "./InfoBox"; // dhyaan rahe capital I se import ho
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    cityName: "Indore",
    temp: 24.17,
    tempMax: 25.17,
    tempMin: 24.17,
    feelsLike: 25.04,
    humidity: 92,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Weather App by : Vanshh</h2>
      <SearchBox updateInfo={updateInfo} />
      {/* yahan sahi variable pass karo */}
      <InfoBox info={weatherInfo} />
    </div>
  );
}
