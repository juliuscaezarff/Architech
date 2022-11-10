import './Team.css'

const Team = ({img, name, description}) => {
  return(
      <div className='employee'>
        <img src={img} alt="" />
        <p className='employeeName'>{name}</p>
        <p className='employeeDescription'>{description}</p>
      </div>
  )
}

export default Team