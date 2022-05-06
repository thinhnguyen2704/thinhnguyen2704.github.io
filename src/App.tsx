import React, { useEffect, useState } from 'react'
import './App.css'
import analogClock1 from './clockFaces/analogClock1.jpg'

export default function App() {
  const [clockTime, setClockTime] = useState(new Date())

  useEffect(() => {   
    let clockInterval = setInterval(() => {
      setClockTime(new Date())
    }, 1000)
    return () => {
      clearInterval(clockInterval)
    }
  })

  return (
    <div >
      <div className='analogClock'>
        <img src={analogClock1} alt='Analog Clock' width={200} height={200} />
        <div className='hands hourHand' style={{transform: `rotate(${parseInt(new Date().getHours().toString()) * 30}deg)`}} />
        <div className='hands minuteHand' style={{transform: `rotate(${parseInt(new Date().getMinutes().toString()) * 6}deg)`}} />
        <div className='hands secondHand' style={{transform: `rotate(${parseInt(new Date().getSeconds().toString()) * 6}deg)`}} />
      </div>
      <div className='digitalClock'>{clockTime.toLocaleTimeString()}</div>
    </div>
  )
}
