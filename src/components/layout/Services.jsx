const Services = ({text, paragraph, icon, img}) => {
  return (
      <div className="service">
        <i>{icon}</i>
        <img src={img} alt="" />
        <div className="serviceInfo">
          <h4>{text}</h4>
          <p>{paragraph}</p>
        </div>
      </div>
  )
}

export default Services
