import './App.css'

// components
import { Header } from './components/Header'
import { Services } from './layouts/Services'
import { Conquests } from './layouts/Conquests'
import { Team } from './layouts/Team'
import { Footer } from './components/Footer'
import { CompanyPresentation } from './layouts/companyPresentation'

// assets
import Meeting from '/meeting.avif'
import Technologies from '/technologies.avif'
import Company from '/team.avif'
import Michael from '/employee_1.jpg'
import Mark from '/employee2.jpg'
import Anthony from '/employee3.jpg'
import Sophia from '/employee_4.jpg'

// icons
import { FaUsers, FaQuoteLeft, FaEnvelope } from 'react-icons/fa'
import { BsBank, BsFillBriefcaseFill, BsFillBookFill } from 'react-icons/bs'

function App() {
  return (
    <div className="">
    <Header />

    <section id="expertiseAreas" className="textImageSection">
 
      <CompanyPresentation />
      
      <div id="otherSevices">
        <Services
          img={Company}
          icon={BsBank}
          text={'Work space'}
        />
        <Services
          img={Technologies}
          icon={BsBank}
          text={'Tecnologias'}
        />
        <Services
          img={Meeting}
          icon={BsBank}
          text={'Empresa e funcionários'}
        />
      </div>
    </section>

    <section id="about">
      <div id="aboutText">
        <p className="sectionSubtitle">Sobre nós</p>
        <h3>
          Um empresa que tem o foco no cliente, aconselhando da melhor forma e
          conseguindo os melhores resultados
        </h3>
        <div className="aboutDescription">
          <i>
            <BsFillBriefcaseFill />
          </i>
          <div>
            <h4>Profissionais atualizados</h4>
            <p>
              Nós promovemos treinamentos mensais a todos os nossos
              colaboradores
            </p>
          </div>
        </div>
        <div className="aboutDescription">
          <i>
            <BsFillBookFill />
          </i>
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
        <Conquests number={50} text={'Engenheiros'} />
        <Conquests number={120} text={'Projetos'} />
        <Conquests number={30} text={'Empresas parceiras'} />
        <Conquests number={7} text={'Prêmios empresariais'} />
      </div>
    </section>
    <section id="testimonials" className="textImageSection">
      <div id="testimonialsInformation" className="textContainer">
        <p className="sectionSubtitle">Dpoimentos de clients</p>
        <h3 className="sectionTitle">
          A Architech e seus devs construiram um software melhor para a minha
          empresa.
        </h3>
        <div className="author">
          <div className="authorInfo">
            <p className="authorName">Bruce Wayne</p>
            <p className="authorJob">CEO da Empresa X</p>
          </div>
          <img src="/author_1.jpg" alt="Jhon Doe" />
        </div>
        <h3 className="sectionTitle">
          Uma equipe ótima que entregou o produto em tempo record
        </h3>
        <div className="author">
          <div className="authorInfo">
            <p className="authorName">Lucas Guerra</p>
            <p className="authorJob">CTO Empresa Y</p>
          </div>
          <img src="/author_2.jpg" alt="Jhon Doe" />
        </div>
      </div>
      <div id="testimonialImageContainer" className="imageContainer">
        <i>
          <FaQuoteLeft />
        </i>
        <img src="/graphic.jpg" alt="" />
      </div>
    </section>
    <section id="team">
      <span className="square"></span>
      <span className="square"></span>
      <h2>
        A <span>Architech</span> tem um time de desenvolvedores a sua
        disposição.
      </h2>
      <div className="employess">
        <Team
          img={Michael}
          name={'Michael Brand'}
          description={'Software Engineer'}
        />
        <Team
          img={Mark}
          name={'Mark Zuckerberg'}
          description={'Software Engineer'}
        />
        <Team
          img={Anthony}
          name={'Anthony Andrew'}
          description={'BackEnd Developer'}
        />
        <Team
          img={Sophia}
          name={'Sophia Emma'}
          description={'Android Developer'}
        />
      </div>
    </section>
    <section id="contact" className="textImageSection">
      <div id="contactImageContainer" className="imageContainer">
        <img src="/main_banner3.jpg" alt="" />
      </div>
      <div id="contactInformation" className="textContainer">
        <i>
          <FaEnvelope />
        </i>
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
          <textarea
            name="message"
            id="message"
            placeholder="Sua mensagem..."
          ></textarea>
          <input type="submit" value="Enviar" className="btn" />
        </form>
      </div>
    </section>
    <Footer />
  </div>
)
  
}

export default App
