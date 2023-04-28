import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { TextField, Button } from "@mui/material";
const Input = () => {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4 mx-4">
        <input
          type="text"
          placeholder="Search for city..."
          className="text-xl font-light p-2 w-full placeholder:lowercase shadow-md focus:outline-none capitalize"
        />
        <SearchRoundedIcon className="text-white cursor-pointer transition hover:scale-125" />
        <LocationOnRoundedIcon className="text-white cursor-pointer transition hover:scale-125" />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center ">
        <Button
          variant="text"
          name="imperial"
          sx={{ color: "white", fontSize: "1.5rem", fontWeight: "400" }}
          className="text-xl  text-white font-light focus:outline-none "
        >
          °C
        </Button>
        <p className="text-xl text-white">|</p>
        <Button
          variant="text"
          name="imperial"
          sx={{ color: "white", fontSize: "1.5rem", fontWeight: "400" }}
          className="text-xl text-white font-light focus:outline-none "
        >
          °F
        </Button>
      </div>
    </div>
  );
};

export default Input;
