import React, {useState} from 'react'
import climate from '../assets/climate.jpg'
import breeze from '../assets/breeze.jpg'
import {BiSolidArrowFromLeft} from 'react-icons/bi'
import Header from './Header'
import axios from 'axios'

const Body = () => {
    const [city, setCity] = useState('')
    const [showData, setShowData] =  useState(false)

    const fetchWeatherData = async (e) => {
        e.preventDefault()
        try{
            const headers = {
                'Content-Type': 'application/json'
            }
            const response = await fetch('http://127.0.0.1:8000/api/weather-data/', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    city: city
                }),
            })
            if (response.status === 200){
                setShowData(true)
                console.log('success')
            }
            else{
                console.log('an error occurred')
            }
        }catch(error){
            console.error('Error: ', error)
        }      
    }
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
                            <p className='text-xl font-semibold md:text-3xl mt-10 md:-mt-16 tracking-tighter'>
                                Enter a city to retrieve the current weather data:      
                            </p>
                            <form method='POST' onSubmit={fetchWeatherData}>
                                <input 
                                typeof='text'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder='e.g Lagos'
                                className='border border-black w-80 mt-10 h-10 text-center placeholder:text-gray-400 placeholder:font-light
                                rounded-sm'
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