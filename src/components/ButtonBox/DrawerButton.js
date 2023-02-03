import React from 'react'

function DrawerButton({svgComponent, text}) {
  return (
    <div className='drawer'>
        <svg style={{fill:'#FF0000'}}>
            {svgComponent}
        </svg>
        <img src='./images/directCopyVector.svg' alt="somthing" style={{fill:'#FF0000'}}/>
        <span>{text}</span> 
    </div>
  )
}

export default DrawerButton