import React from 'react'
import './button.css'

function clickme() {
    alert('You Found An Easter Egg Congrats!!')
}

const Button = () => {
  return (
    <div className='click'>
      <a onClick={clickme} className='rick rick-primary' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab' rel="noopener noreferrer" target='_blank' color='lightblue'>Click me</a>
    </div>
  )
}

export default Button
