const API_KEY = "073cb906264b439776c8f2dc347790ac";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

//https://api.openweathermap.org/data/2.5/weather?q=London&appid=073cb906264b439776c8f2dc347790ac

const getWeatherData = (infoType: string, searchParams: any): Promise<any> => {
  const url: any = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((res) => res.json());
};
const formatCurrentWeather = (data: any) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};


const getFormattedWeatherData = async (searchParams: any) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const{lat,lon}=formattedCurrentWeather
  const formatedForecastWeather=await getWeatherData('forecast',{
    lat,lon,exclude:'current,minutely,alerts',units:searchParams.units,
  })
  return formattedCurrentWeather;
};
export default getFormattedWeatherData;
