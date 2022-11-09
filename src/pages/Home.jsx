import './App.css'

import Header from '../components/layout/Header'
import Services from '../components/layout/Services'
import Image from '/main-banner.avif'

import { FaUsers } from 'react-icons/fa'
import { BsBank } from 'react-icons/bs'

function Home() {
  return (
    <div className="">
      <Header />
      <main id="expertiseAreas" className="textImageSection">
        <div id="expertiseInformation" className="textContainer">
          <p className="sectionSubtitle">Áreas de atuação</p>
          <h3 className="sectionTitle">
            Nossos especialistas podem ajudar você em Direito Civil, Ambiental,
            Empresarial.
          </h3>
          <a href="#" className="btn">
            Saiba Mais
          </a>
        </div>
        <div id="expertiseImageContainer" className="imageContainer">
          <i><FaUsers /></i>
          <img
            src="/banner-team.avif"
            alt="Imagem contendo pessoas conversando em uma empresa sobre projetos"
          />
        </div>
        <div className="otherSevices">
          <Services
            img={Image}
            icon={BsBank}
            text={'Bancos e Finaças pessoais'}
            paragraph={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui commodi ut eum error, praesentium debitis ad minima vero obcaecati quia quasi voluptatum molestias fuga laborum inventore beatae fugiat? Labore'
            }
          />
          <Services
            img={Image}
            icon={BsBank}
            text={'Construção de imóveis'}
            paragraph={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui commodi ut eum error, praesentium debitis ad minima vero obcaecati quia quasi voluptatum molestias fuga laborum inventore beatae fugiat? Labore'
            }
          />
          <Services
            img={Image}
            icon={BsBank}
            text={'Empresas e funcionários'}
            paragraph={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui commodi ut eum error, praesentium debitis ad minima vero obcaecati quia quasi voluptatum molestias fuga laborum inventore beatae fugiat? Labore'
            }
          />
        </div>
      </main>
    </div>
  )
}

export default Home
