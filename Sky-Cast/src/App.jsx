// import { useState } from 'react'
// import WeatherApp from './WeatherApp'
// import SearchBox from './SearchBox'
// import InfoBox from './InfoBox'
// import './App.css'

// export default function App() {
//   return (
//     <>
//       <WeatherApp/> 
//     <SearchBox/>
//   <InfoBox/>
//     </>
//   );
// }

// // export default App
import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./App.css";

export default function App() {
  // yahan par weather info ko state me rakhenge
  const [weatherInfo, setWeatherInfo] = useState(null);

  // SearchBox se info update karne ke liye function
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="App">
      <h1>🌤️ Weather App</h1>
      {/* SearchBox ko updateInfo pass kiya */}
      <SearchBox updateInfo={updateInfo} />

      {/* Agar weatherInfo mila to InfoBox dikhao */}
      {weatherInfo ? (
        <InfoBox info={weatherInfo} />
      ) : (
        <p style={{ marginTop: "20px" }}>Enter a city to get weather details</p>
      )}
    </div>
  );
}
