import './App.css'

import Header from '../components/layout/Header'
import Services from '../components/layout/Services'
import Conquests from '../components/layout/Conquests'

import Image from '/main-banner.avif'

import { FaUsers, FaQuoteLeft } from 'react-icons/fa'
import { BsBank, BsFillBriefcaseFill, BsFillBookFill } from 'react-icons/bs'

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
          <i>
            <FaUsers />
          </i>
          <img
            src="/banner-team.avif"
            alt="Imagem contendo pessoas conversando em uma empresa sobre projetos"
          />
        </div>
        <div id="otherSevices">
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
      <section id="about">
        <div id="aboutText">
          <p className="sectionSubtitle">Sobre nós</p>
          <h3>
            Um empresa que tem o foco no cliente, aconselhando da melhor forma e
            conseguindo os melhores resultados
          </h3>
          <div className="aboutDescription">
            <i><BsFillBriefcaseFill /></i>
            <div>
              <h4>Advogados Atualizados</h4>
              <p>Nós promovemos treinamnetos mensais a todos os nossos colaboradores</p>
            </div>
          </div>
          <div className="aboutDescription">
            <i><BsFillBookFill /></i>
            <div>
              <h4>Domínio das novas tecnologias</h4>
              <p>Nossos engenheiros são especializados em várias tecnologias para construir softwares melhores</p>
            </div>
          </div>
        </div>
        <div id='aboutConquests'>
          <Conquests 
            number={50}
            text={"Engenheiros"}
          />
           <Conquests 
            number={120}
            text={"Projetos"}
          />
           <Conquests 
            number={30}
            text={"Empresas parceiras"}
          />
           <Conquests 
            number={7}
            text={"Prêmios empresariais"}
          />
        </div>
      </section>
      <section id='testimonials' className='textImageSection'>
          <div id="testimonialsInformation" className="textContainer">
            <p className='sectionSubtitle'>Dpoimentos de clients</p>
            <h3 className='sectionTitle'>A arquitec e seus devs construiram um software melhor para a minha empresa.</h3>
            <div className="author">
              <div className="authorInfo">
                <p className='authorName'>Jhon Doe</p>
                <p className='authorJob'>CEO da Empresa X</p>
              </div>
              <img src="/main-banner.avif" alt="Jhon Doe" />
            </div>
            <h3 className='sectionTitle'>Uma equipe ótima que entregou o produto em tempo record</h3>
            <div className="author">
              <div className="authorInfo">
                <p className='authorName'>Lucas G</p>
                <p className='authorJob'>CTO Empresa Y</p>
              </div>
              <img src="/main-banner.avif" alt="Jhon Doe" />
            </div>
          </div>
          <div id="testimonialImageContainer" className="imageContainer">
            <i><FaQuoteLeft /></i>
            <img src="/main-banner.avif" alt="" />
          </div>
      </section>
    </div>
  )
}

export default Home
