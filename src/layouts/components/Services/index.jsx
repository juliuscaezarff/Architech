import './styles.css'

export function Services({ text, img, icon }) {
  return (
    <div className="service">
      <div className="serviceCard">
        <i>{icon}</i>
        <img src={img} alt="" />
        <div className="serviceInfo">
          <h4>{text}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui
            commodi ut eum error, praesentium debitis ad minima vero obcaecati
            quia quasi voluptatum molestias fuga laborum inventore beatae
            fugiat? Labore
          </p>
        </div>
      </div>
    </div>
  )
}
