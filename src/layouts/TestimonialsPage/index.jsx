import React from "react"

import './styles.css'

// assets

import Michael from '/employee_1.jpg'
import Mark from '/employee2.jpg'
import Anthony from '/employee3.jpg'
import Sophia from '/employee_4.jpg'

// icons
import { FaQuoteLeft } from 'react-icons/fa'

// components
import { Team } from '../components/Team'

export const TestimonialsPage = () => {
  return(
    <div>
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
          <h3 className="sectionTitle">
            Uma equipe ótima que entregou o produto em tempo record
          </h3>
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
    </div>
  )
}