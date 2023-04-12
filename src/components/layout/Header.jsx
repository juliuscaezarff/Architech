import './Header.css'

const Header = () => {
  return (
    <header id="header">
      <div id="innerHeader">
        <h2 id="brand">Architech</h2>
        <nav id="navbar">
          <a href="#header">Início</a>
          <a href="#expertise-areas">Serviços</a>
          <a href="#about">Sobre</a>
          <a href="#team">Time</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
      <div className="banner active">
        <span className="square"></span>
        <h2>Melhores experts do mercado</h2>
        <p>Os engenheiros de software mais bem qualificados estão aqui</p>
      </div>
      <div className="dots">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </header>
  )
}

export default Header
