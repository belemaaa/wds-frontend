import React from 'react'
import climate from '../assets/climate.jpg'
import Header from './Header'

const Body = () => {
  return (
    <div>
        <Header/>
        <div className='bg-white h-screen w-screen'>
            <div className='md:py-10 md:px-32'>
                <div className='bg-white md:rounded-lg h-[800px] md:h-[600px] shadow-xl'>
                    <div className='flex flex-row'>
                        <div>
                            <img src={climate} className='md:ml-16 md:w-[450px] md:h-[530px] md:my-8 md:rounded-lg'/>
                        </div>
                    </div>
                    
                </div>
            </div>         
        </div>
    </div>
   
  )
}

export default Body