import React,{useState} from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button } from "@mui/material";
import { toast } from "react-toastify";


interface Props{
  setQuery:any,
  units:string,
  setUnits:any,
}

const Input:React.FC<Props> = ({setQuery,units,setUnits}) => {
  
  const [city,setCity]=useState("");
  function handleSearch(){
    if(city!==''){
      setQuery({q:city})
    }
  }
  function handleLocation(){
    if(navigator.geolocation){
      toast.info(`Fethcing user Location`)
      navigator.geolocation.getCurrentPosition((position)=>{
        toast.success("location fetched");
        const lat=position.coords.latitude;
        const lon=position.coords.longitude;
        setQuery({
          lat,
          lon,
        })
      })
    }
  }
  function handleUnitChange(e:any){
    const selectunit=e.target.name;
    if(selectunit!==units){
      setUnits(selectunit)
    }
  }
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4 mx-4">
        <input
          type="text"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          placeholder="Search for city..."
          className="text-xl font-light p-2 w-full placeholder:lowercase shadow-md focus:outline-none capitalize"
        />
        <SearchRoundedIcon onClick={handleSearch} className="text-white cursor-pointer transition hover:scale-125" />
        <LocationOnRoundedIcon onClick={handleLocation} className="text-white cursor-pointer transition hover:scale-125" />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center ">
        <Button
          variant="text"
          onClick={(e)=>handleUnitChange(e)}
          name="metric"
          sx={{ color: "white", fontSize: "1.5rem", fontWeight: "400" ,}}
          className="text-xl  text-white font-light focus:outline-none transition ease-out hover:scale-125"
        >
          °C
        </Button>
        <p className="text-xl text-white">|</p>
        <Button
          variant="text"
          onClick={(e)=>handleUnitChange(e)}
          name="imperial"
          sx={{ color: "white", fontSize: "1.5rem", fontWeight: "400" }}
          className="text-xl text-white font-light focus:outline-none transition ease-out hover:scale-125 "
        >
          °F
        </Button>
      </div>
    </div>
  );
};

export default Input;
