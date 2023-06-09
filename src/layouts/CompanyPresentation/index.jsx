import React from 'react'

import './styles.css'

//components
import { Services } from '../components/Services'

// assets
import bannerTeam from '/banner-team.avif'
import Meeting from '/meeting.avif'
import Technologies from '/technologies.avif'
import Company from '/team.avif'

// icons
import { FaUsers, FaVrCardboard, FaBrain } from 'react-icons/fa'

export const CompanyPresentation = () => {
  return (
    <div className="compnaysection">
      <div className="companyContainer">
        <div>
          <h3 className="sectionTitle">
            Nossos desenvolvedores podem ajudar sua empresa com um software
            melhor e uma IA mais inteligente.
          </h3>
          <button href="#" className="btn">
            Saiba Mais
          </button>
        </div>

        <div id="expertiseImageContainer" className="imageContainer">
          <i>
            <FaUsers size={20} fill='red'/>
          </i>

          <img
            src={bannerTeam}
            alt="Imagem contendo pessoas conversando em uma empresa sobre projetos"
          />
        </div>
      </div>

      <div id="otherSevices">
        <Services img={Company} icon={<FaUsers size={20} fill='red'/>} text={'Work space'} />
        <Services
          img={Technologies}
          icon={<FaVrCardboard />}
          text={'Tecnologias'}
        />
        <Services img={Meeting} icon={<FaBrain />} text={'Time'} />
      </div>
    </div>
  )
}
