import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <span onClick={()=>window.scroll(0,0)}>🎬Chill Hub🎥</span>
    </div>
  )
}

export default Header