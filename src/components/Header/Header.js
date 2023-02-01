import React from 'react'
import Broker from '../Broker/Broker'
import "./Header.css"
function Header(props) {
    // const date = new Date();
    // const broker = {...props,date:date.setDate(date.getDate() - 103*7 )}
  return (
    <div className='header'>
        <Broker {...props}/>
    </div>
  )
}

export default Header