import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef as UseRef } from "react";
import emailjs from 'emailjs-com';

export const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_267ashv', 'template_2tij8ob', form.current, '911PPZfC0tuazZwrk')

    e.target.reset()
  };

  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>sternmitten9929@gmail.com</h5>
              <a href="mailto:sternmitten9929@gmail.com" rel="noopener noreferrer" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>sternmitten9929</h5>
              <a href="https://m.me/stern.mitten" rel="noopener noreferrer" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+44 7711 299750</h5>
              <a href="https://api.whatsapp.com/send?phone=7711299750" rel="noopener noreferrer" target='_blank'>Send a message</a>
            </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Yor Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact
