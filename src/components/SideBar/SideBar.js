import React, { useCallback } from 'react'
import "./SideBar.css"
import { ReactComponent as DirectCopyVector } from '../../images/svg/directCopyVector.svg';
import { ReactComponent as ActiveateVector } from '../../images/svg/activate.svg';
import { ReactComponent as NotifyVector } from '../../images/svg/notify.svg';

import DrawerButton from './DrawerButton';
import { useDispatch, useSelector } from 'react-redux';
import CopyBox from './CopyBox/CopyBox';
// import directCopyVector from './images/directCopyVector.svg';
function SideBar() {
  const active = useSelector((state)=>state.sidebar.active);
  const index = useSelector((state)=>state.table.selectedIndex);
  const selected = useSelector((state)=>state.table.strategies.regular[index]);
  const dispatch = useDispatch();
  const drawer = useCallback(
    () => {
      if(index || index===0){
        dispatch({type: 'sidebar/active', payload: !active})
      }
    },
    [dispatch, active, index],
  )
  return (
    <div className='button-box'>
      <div className='signup'>
        Sign Up
      </div>
      <div className='drawer-wrapper'>
      <DrawerButton index={0} text={"Activate"} >
        <ActiveateVector className='dcVectorfill'  />  
      </DrawerButton>
      </div>
      <div className='drawer-wrapper'>
      <DrawerButton index={1} text={"Notify"}>
        <NotifyVector className='dcVectorfill'  />  
      </DrawerButton>
      </div>
      <div className='drawer-wrapper' onClick={drawer}>
      <DrawerButton index={2} text={"Direct Copy"} active={active && selected} >
        <DirectCopyVector className='dcVectorfill' />  
      </DrawerButton>
      {active && selected && <CopyBox strat={selected}/>}
      </div>
    </div>
  )
}

export default SideBar