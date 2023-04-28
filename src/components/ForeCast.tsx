import React from 'react'
interface Props{
    title:string
}
const ForeCast:React.FC<Props> = ({title}) => {
  return (
    <div>
        <div className='flex mt-6 items-center justify-start'>
                <p className="text-white font-medium uppercase">
                    {title}
                </p>
               
        </div>
        <hr className='my-2'/>
        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                       4:30 PM 
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                       4:30 PM 
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                       4:30 PM 
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                       4:30 PM 
                </p>
                <img src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="" className='w-12 my-1'/>
                <p className='font-medium'>22°</p>
            </div>
        </div>
    </div>
  )
}

export default ForeCast