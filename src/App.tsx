import { useEffect, useState } from "react";
import "./App.css";
import TopButtons from "./components/TopButtons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from "./components/Input";
import TimeandLocation from "./components/TimeandLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import ForeCast from "./components/ForeCast";
import getFormattedWeatherData from "./services/webServices";

function App() {
  const [query, setQuery] = useState({ q: "delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState<any>(null);
  useEffect(() => {
    const fetchWeather = async () => {
      const message=query.q?query.q:'current location'
      toast .info ('Fetching weather for '+message)
      await getFormattedWeatherData({ ...query, units }).then((data) =>{
        toast.success(`succesfully fetched weather for ${data.name}, ${data.country} `)
        setWeather(data)
      }
      );
    };
    fetchWeather();
    // console.log(weather)
    // console.log(query)
  }, [query, units]);

  const formatBackground=()=>{
    if(!weather) return "from-cyan-700 to-blue-700"
    const threshold=units==="metric"?20:60;
    if(weather.temp<=threshold)return "from-cyan-700 to-blue-700"

    return "from-yellow-700 to-orange-700"
    return 
  }
  return (
    <div>
      <div className={`h-fit  rounded-md shadow-md shadow-gray-400 mx-auto 
      max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${formatBackground()}`}>
        {/* <Typography variant='h2' color="text.secondary" align="left">Hello World</Typography> */}

        <TopButtons setQuery={setQuery}/>

        <Input setQuery={setQuery} units={units} setUnits={setUnits}/>
        {weather && (
          <div>
            <TimeandLocation weather={weather}/>
            <TemperatureDetails weather={weather} />
            <ForeCast title="Hourly Forcast" items={weather.hourly}/>
            <ForeCast title="Daily Forcast" items={weather.daily}/>
          </div>
        )}
         <ToastContainer autoClose={5000} theme='colored' newestOnTop={true}/>
      </div>
    </div>
  );
}

export default App;
