import './styles.css'

import {
  FaMapPin,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="contactInfo">
        <div className="footerBrand">
          <h2>Architech</h2>
          <p>We build the future</p>
        </div>
        <p>
          <i>
            <FaMapPin />
          </i>
          Rua de exemplo, 1415
        </p>
        <p>
          <i>
            <FaPhoneAlt />
          </i>
          (99) 9999-9999
        </p>
        <p>
          <i>
            <FaEnvelope />
          </i>
          contato@architect.com
        </p>
        <div className="socialNetworks">
          <p>Siga-nos:</p>
          <div className="networks">
            <a href="#">
              <i>
                <FaFacebook />
              </i>
            </a>
            <a href="#">
              <i>
                <FaTwitter />
              </i>
            </a>
            <a href="#">
              <i>
                <FaLinkedin />
              </i>
            </a>
            <a href="#">
              <i>
                <FaInstagram />
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="linksContainer">
        <h4>Outros serviços</h4>
        <nav>
          <a href="#">Proprieade intelectual</a>
          <a href="#">LGPD</a>
          <a href="#">Direito Internacional</a>
          <a href="#">Projetos</a>
        </nav>
      </div>
      <div className="linksContainer">
        <h4>Páginas</h4>
        <nav>
          <a href="#">Termo e condições</a>
          <a href="#">Política de privacidade</a>
          <a href="#">Fale com um especialista</a>
          <a href="#">FAQ</a>
        </nav>
      </div>
      <div className="linksContainer">
        <h4>Consulta grátis</h4>
        <div className="phoneNumber">
          <i>
            {' '}
            <FaPhoneAlt />
          </i>
          <p>(99) 99999-9999</p>
        </div>
        <p className="phoneInfo">
          Este telefone é reservado para projetos em andamento.
        </p>
      </div>
    </footer>
  )
}
