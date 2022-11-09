import './Services.css'

const Services = ({text, paragraph, icon, img}) => {
  return (
      <div className="service">
        <img src={img} alt="" />
        <i>{icon}</i>
        <div className="serviceInfo">
          <h4>{text}</h4>
          <p>{paragraph}</p>
        </div>
      </div>
  )
}

export default Services
