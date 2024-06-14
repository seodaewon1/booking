import React from 'react'
import headermenus from '../data/headerMenu'
import { Link } from 'react-router-dom'

const buttonGrid = () => {
  return (
    <div className='button-grid'>
    {headermenus.map((menu, index) => (
        <div key={index} className={`button-grid__button`}>
        <div className='button-title'>
            <Link to={menu.src}>{menu.title}</Link>
        </div>
        </div>
    ))}
</div>
  )
}

export default buttonGrid