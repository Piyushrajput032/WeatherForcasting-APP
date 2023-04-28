import React from 'react'
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

const TemperatureDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
                <p>Clouds</p>

        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="" className='w-20'/>
            <p className='text-5xl'>34°</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                <ThermostatIcon sx={{textSize:'18px',marginRight:'0.25rem'}}/>
                Real Feel:
                <span className='font-medium ml-1'>32°</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                <WaterDropIcon sx={{textSize:'18px',marginRight:'0.25rem'}}/>
                Humidity:
                <span className='font-medium ml-1'>65%</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                <AirIcon sx={{textSize:'18px',marginRight:'0.25rem'}}/>
                Wind:
                <span className='font-medium ml-1'>11 km/h</span>
                </div>

            </div>

        </div>
        <div className='flex flex-row items-center justify-center space-x-2
         text-white text-sm py-3'>
            <WbSunnyOutlinedIcon/>
            <p className='font-light'>
                Rise:<span className='font-medium ml-2 '>06:15 AM</span>
            </p>
            <p className='font-light'>|</p>
            <WbTwilightOutlinedIcon/>
            <p className='font-light'>
                Set:<span className='font-medium ml-2 '>08:45 AM</span>
            </p>
            <p className='font-light'>|</p>
            <ArrowUpwardOutlinedIcon/>
            <p className='font-light'>
                High:<span className='font-medium ml-2 '>45°</span>
            </p>
            <p className='font-light'>|</p>
            <ArrowDownwardOutlinedIcon/>
            <p className='font-light'>
                Low:<span className='font-medium ml-2 text-sm'>25°</span>
            </p>
            
        </div>
    </div>
  )
}

export default TemperatureDetails