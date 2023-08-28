import React from 'react'
import climate from '../assets/climate.jpg'
import breeze from '../assets/breeze.jpg'
import Header from './Header'

const Body = () => {
  return (
    <div>
        <Header/>
        <div className='bg-white h-screen w-screen'>
            <div className='py-10 md:py-10 lg:px-32'>
                <div className='bg-white md:rounded-lg h-[800px] md:h-[600px] shadow-sm'>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div>
                            <img src={climate} className='mx-4 md:ml-0 lg:ml-16 w-96 md:w-[450px] lg:w-[550px] md:h-[530px] md:my-8 rounded-lg'/>
                        </div>
                        <div className='flex flex-col text-center md:ml-16 lg:ml-16'>
                            {/* <img src={breeze} className='w-8 h-8'/> */}
                            <p className='text-xl font-light md:text-3xl mt-10 md:-mt-16 tracking-tighter'>
                                Enter a city to retrieve the current weather data
                            </p>
                            <form method='POST'>
                                <input 
                                typeof='text'
                                placeholder='e.g Lagos'
                                className='border border-black w-80 mt-10 h-10 text-center placeholder:text-black placeholder:font-light'
                                />
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>         
        </div>
    </div>
   
  )
}

export default Body