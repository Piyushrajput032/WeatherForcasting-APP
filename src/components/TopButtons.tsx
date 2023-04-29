import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import React from "react";
interface Props {
  setQuery: any;
}
const TopButtons: React.FC<Props> = ({ setQuery }) => {
  const [city, setCity] = React.useState("");
  const cities: { id: number; title: string }[] = [
    {
      id: 1,
      title: "Aurangabad",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "Delhi",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Ranchi",
    },
  ];

 
  return (
    <div>
      <div className="flex items-center justify-around my-6">
        {cities.map((city, index) => {
          return (
            <button
              key={index}
             
              className="text-white text-xl font-light transition ease-out hover:scale-110"
              onClick={() => setQuery({q:city.title})}
            >
              {city.title}
            </button>
          );
        })}
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
