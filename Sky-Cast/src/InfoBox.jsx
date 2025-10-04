import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const Init_img =
    "https://media.istockphoto.com/id/1419733957/photo/dark-sky-and-heavy-rain-thunder-storm-over-a-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=82JEGYWgYZK2fgMnktg9UEhhzF8FYF4Eu0FXaIF2wIw=";

let Hot_Url ="https://images.unsplash.com/photo-1632652507598-a6773059c6fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
let Cold_Url="https://images.unsplash.com/photo-1706013466042-333b260b6b85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZXRoZXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
let Rain_Url="https://media.istockphoto.com/id/1503488794/photo/panorama-of-beautiful-clouds-background-of-a-grey-sky-and-cloud.webp?a=1&b=1&s=612x612&w=0&k=20&c=TArP2nSSUkkYKxtnkChWFN45YOixiCfyNAmsjh3kznA="
  return (
    <div className="infoBox">
      <h1>Weather Info - {info.weather}</h1>
      <div className="Card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={info.humidity>80 ? Rain_Url : info.temp >15 ? Hot_Url : Cold_Url} title="Weather" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.cityName}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <div>🌡️ Temperature = {info.temp}&deg;C</div>
              <div>🤒 Feels Like = {info.feelsLike}&deg;C</div>
              <div>💧 Humidity = {info.humidity}%</div>
              <div>⬇️ Minimum Temperature = {info.tempMin}&deg;C</div>
              <div>⬆️ Maximum Temperature = {info.tempMax}&deg;C</div>
              <div>
                ⛅ Weather can be described as <b>{info.weather}</b> and feels
                like <b>{info.feelsLike}&deg;C</b>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
