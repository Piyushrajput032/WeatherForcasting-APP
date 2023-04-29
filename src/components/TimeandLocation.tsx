import React from 'react'
import { formatToLocatTime } from '../services/webServices'

interface Props{
  weather:{dt:any,timezone:any,name:string,country:string},
}
const TimeandLocation:React.FC<Props>=({weather})=> {

  // console.log(weather.dt)
  return (
    <div>
    <div className='flex items-center justify-center my-6'>
        <p className='text-xl text-white font-light'>
           
            {formatToLocatTime(weather.dt,weather.timezone)}
        </p>
    </div>
    <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
           {`${weather.name}, ${weather.country}`}
        </p>
    </div>
    </div>
  )
}

export default TimeandLocation