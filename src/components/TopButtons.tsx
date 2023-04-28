import { FormControl, InputLabel, MenuItem, Select,Button } from "@mui/material";
import React from "react";

const TopButtons = () => {
  const [city, setCity] = React.useState("");
  const cities: { id: number; city: string }[] = [
    {
      id: 1,
      city: "Aurangabad",
    },
    {
      id: 2,
      city: "London",
    },
    {
      id: 3,
      city: "Delhi",
    },
    {
      id: 4,
      city: "Tokyo",
    },
    {
      id: 5,
      city: "Ranchi",
    },
  ];
 function handlecity(a:any){
    setCity(a.target.value)
    console.log(city);
 }
  console.log(city);
  return (
    <div>
      <div className="flex items-center justify-around my-6">
          {
            cities.map((item,index)=>{return(
              <button key={index} className="text-white text-xl font-light">{item.city}</button>)
            })
          }
      </div>
    {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="cities" className="text-red-400">Select City</InputLabel>
      <Select className="shadow-md"
        value={city}
        onChange={(e)=>handlecity(e)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
            <em>Select city</em>
          </MenuItem>
        <MenuItem value="Athens">Athens</MenuItem>
        <MenuItem value="Tokyo">Tokyo</MenuItem>
        <MenuItem value="Delhi">Delhi</MenuItem>
        <MenuItem value="Ranchi">Ranchi</MenuItem>
        {
            cities.map((item,index)=>{
                return(
                    <div key={index}>
                        <MenuItem value={item.city}>{item.city}</MenuItem>
                    </div>
                )
            })
        }
        
      </Select>
      </FormControl> */}
    </div>
  );
};

export default TopButtons;
