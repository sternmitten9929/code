import React from 'react'
import './time.css';
import {useState} from 'react'


function Time() {
  const d = new Date()
  const weekDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  const day = weekDay[d.getDay()]
  const month = months[d.getMonth()]
  const date = d.getDate()
  const year = d.getFullYear()
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time)

  const updateTime = () => {
    let time = new Date().toLocaleTimeString()
    setCurrentTime(time)
  }

  setInterval(updateTime , 1000)

  return (
    <>
    <div className='time'>
      <div className='date'>
        <h1>{day}</h1>
        <h2>{month}</h2>
        <h2>{date}</h2>
        <h2>{year}</h2>
        <h2>{currentTime}</h2>
      </div>
    </div>
    </>


  );



}

export default Time
