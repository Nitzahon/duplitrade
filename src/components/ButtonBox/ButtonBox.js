import React from 'react'
import "./ButtonBox.css"
import { ReactComponent as DirectCopyVector } from '../../images/svg/directCopyVector.svg';
import { ReactComponent as ActiveateVector } from '../../images/svg/activate.svg';
import { ReactComponent as NotifyVector } from '../../images/svg/notify.svg';


import DrawerButton from './DrawerButton';
// import directCopyVector from './images/directCopyVector.svg';
function ButtonBox() {
  return (
    <div className='button-box'>
      <div className='signup'>
        Sign Up
      </div>
      <DrawerButton index={0} text={"Activate"}>
        <ActiveateVector className='dcVectorfill'  />  
      </DrawerButton>
      <DrawerButton index={1} text={"Notify"}>
        <NotifyVector className='dcVectorfill'  />  
      </DrawerButton>
      <DrawerButton index={2} text={"Direct Copy"} enabled={true}>
        <DirectCopyVector className='dcVectorfill' />  
      </DrawerButton>
    </div>
  )
}

export default ButtonBox