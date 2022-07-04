import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://uk.linkedin.com/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
      <a href="https://uk.github.com/" rel="noreferrer" target="_blank"><FaGithub/></a>
      <a href="https://uk.dribbble.com/" rel="noreferrer" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials
