import React from 'react'

import './styles.css'
import { BsFillBookFill, BsFillBriefcaseFill } from 'react-icons/bs'
import { FaBook, FaTrophy, FaUser, FaUsers } from 'react-icons/fa'

import { Conquests } from '../components/Conquests'

export const AboutCompany = () => {
  return (
    <div>
      <section id="about">
        <div id="aboutText">
          <p className="sectionSubtitle">Sobre nós</p>
          <h3>
            Um empresa que tem o foco no cliente, aconselhando da melhor forma e
            conseguindo os melhores resultados
          </h3>

          <div className="aboutDescription">
            <BsFillBriefcaseFill />

            <div>
              <h4>Profissionais atualizados</h4>
              <p>
                Nós promovemos treinamentos mensais a todos os nossos
                colaboradores
              </p>
            </div>
          </div>

          <div className="aboutDescription">
            <BsFillBookFill />

            <div>
              <h4>Domínio das novas tecnologias</h4>
              <p>
                Nossos engenheiros são especializados em várias tecnologias para
                construir softwares melhores
              </p>
            </div>
          </div>
        </div>

        <div id="aboutConquests">
          <Conquests
            number={50}
            text={'Engenheiros'}
            icon={<FaUser size={20} fill="red" />}
          />
          <Conquests
            number={120}
            text={'Projetos'}
            icon={<FaBook size={20} fill="red" />}
          />
          <Conquests
            number={30}
            text={'Empresas parceiras'}
            icon={<FaUsers size={20} fill="red" />}
          />
          <Conquests
            number={7}
            text={'Prêmios empresariais'}
            icon={<FaTrophy size={20} fill="red" />}
          />
        </div>
      </section>
    </div>
  )
}
