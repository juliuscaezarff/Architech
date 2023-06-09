import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

import './styles.css'

export const ContactSection = () => {
  return (
    <section id="contact" className="contactSection">
      <div className='contactContainer'>
          <img src="/main_banner3.jpg" alt="" />
        <div id="contactInformation" className="textContainer">
          <FaEnvelope size={30} />

          <p className="sectionSubtitle">Entre em contato</p>
          <form>
            <div className="formControl">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu melhor E-mail"
              />
            </div>
            <input type="text" name="phone" id="phone" placeholder="Telefone" />
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Sua mensagem..."
              ></textarea>
            </div>

            <input type="submit" value="Enviar" className='button'/>
          </form>
        </div>
      </div>
    </section>
  )
}
