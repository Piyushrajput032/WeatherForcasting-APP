import { useState } from "react";
import { Typography, Container } from "@mui/material";
import "./App.css";
import TopButtons from "./components/TopButtons";
import Input from "./components/Input";
import TimeandLocation from "./components/TimeandLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import ForeCast from "./components/ForeCast";
import getFormattedWeatherData from "./services/webServices";

function App() {
const fetchWeather=async()=>{
  const data=await getFormattedWeatherData({q:'London'});
  console.log(data)
}
fetchWeather();
  return (
    <>
      <div className="h-fit rounded-md shadow-md shadow-gray-400 mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700">
        {/* <Typography variant='h2' color="text.secondary" align="left">Hello World</Typography> */}
       
          <TopButtons />
          
          <Input />
          
          
       
        <TimeandLocation/>
        <TemperatureDetails/>
        <ForeCast title="Hourly Forcast"/>
        <ForeCast title="Daily Forcast"/>
      </div>
    </>
  );
}

export default App;
