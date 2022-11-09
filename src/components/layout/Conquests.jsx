import './Conquests.css'

const Conquests = ({number, text}) => {

  return (
    <div className='conquest'>
      <i></i>
      <p className='number'>{number}</p>
      <p className='text'>{text}</p>
    </div>
  )
}

export default Conquests