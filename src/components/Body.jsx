import React, {useState} from 'react'
import climate from '../assets/climate.jpg'
import breeze from '../assets/breeze.jpg'
import {BiSolidArrowFromLeft} from 'react-icons/bi'
import Header from './Header'


const Body = () => {
    const [city, setCity] = useState('')
    const [showData, setShowData] =  useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState('')

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
            console.log(response)
            const responseData = await response.json();

            if (response.status === 200){
                setShowData(true)
                console.log('success')
                setData(responseData.weatherdata);
                console.log(responseData.weatherdata)
                setCity('')
            }
            else if(response.status === 500){
                setError('Input a valid city name.')
                setCity('')
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
                            <img src={climate} className='items-center justify-center md:ml-0 lg:ml-16 w-[380px] md:w-[450px] lg:w-[550px] md:h-[530px] md:my-8 rounded-lg'/>
                        </div>
                        <div className='flex flex-col text-center md:ml-16 lg:ml-16'>
                            {showData ? (
                                <div>
                                    <p className='text-3xl'>Weather Data</p>
                                </div>
                            ):(
                               <div>
                                    {error && <p className='text-red-600 mt-8 -mb-10'>{error}</p>}
                                    <p className='text-xl font-semibold md:text-3xl mt-10 md:-mt-16 tracking-tighter'>
                                        Enter a city to retrieve the current weather data:      
                                    </p>
                                    <form method='POST' onSubmit={fetchWeatherData}>
                                        <div>
                                            <input 
                                            typeof='text'
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            placeholder='e.g Lagos'
                                            className='border border-black w-80 mt-10 h-10 text-center placeholder:text-gray-400 placeholder:font-light
                                            rounded-sm'
                                            />
                                        </div>
                                        
                                        <button type='submit' className='mt-10 bg-slate-700 rounded-lg text-white px-3 py-2'>
                                            Retrieve
                                        </button>
                                    </form>
                                </div>
                                
                            )
                            }
                            
                        </div>
                    </div>
                    
                </div>
            </div>         
        </div>
    </div>
   
  )
}

export default Body