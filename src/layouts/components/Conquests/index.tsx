import React from 'react'

import './styles.css'

export const Conquests = ({number, text, icon}) => {

  return (
    <div className='conquest'>
      <i>{icon}</i>
      <p className='number'>{number}</p>
      <p className='text'>{text}</p>
    </div>
  )
}