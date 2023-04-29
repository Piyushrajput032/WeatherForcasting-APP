import React from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { formatToLocatTime, iconUrlFromCode } from "../services/webServices";

interface Props {
  weather: {
    details: string;
    icon: string;
    temp: number;
    temp_min: number;
    temp_max: number;
    sunrise: number;
    sunset: number;
    speed: number;
    humidity: number;
    feels_like: number;
    timezone: string;
  };
}
const TemperatureDetails: React.FC<Props> = ({ weather }) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{weather.details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src={iconUrlFromCode(weather.icon)}
          alt=""
          className="w-20"
        />
        <p className="text-5xl">{weather.temp.toFixed()}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <ThermostatIcon sx={{ textSize: "18px", marginRight: "0.25rem" }} />
            Real Feel:
            <span className="font-medium ml-1">{weather.feels_like.toFixed()}°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WaterDropIcon sx={{ textSize: "18px", marginRight: "0.25rem" }} />
            Humidity:
            <span className="font-medium ml-1">{weather.humidity.toFixed()}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <AirIcon sx={{ textSize: "18px", marginRight: "0.25rem" }} />
            Wind:
            <span className="font-medium ml-1">{weather.speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-center justify-center space-x-2
         text-white text-sm py-3"
      >
        <WbSunnyOutlinedIcon />
        <p className="font-light">
          Rise:<span className="font-medium ml-2 ">{formatToLocatTime(weather.sunrise,weather.timezone,'hh:mm a')}</span>
        </p>
        <p className="font-light">|</p>
        <WbTwilightOutlinedIcon />
        <p className="font-light">
          Set:<span className="font-medium ml-2 ">{formatToLocatTime(weather.sunset,weather.timezone,'hh:mm a')}</span>
        </p>
        <p className="font-light">|</p>
        <ArrowUpwardOutlinedIcon />
        <p className="font-light">
          High:<span className="font-medium ml-2 ">{weather.temp_max.toFixed()}°</span>
        </p>
        <p className="font-light">|</p>
        <ArrowDownwardOutlinedIcon />
        <p className="font-light">
          Low:<span className="font-medium ml-2 text-sm">{weather.temp_min.toFixed()}°</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureDetails;
