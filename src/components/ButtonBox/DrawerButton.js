import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as CevronDownVector } from '../../images/svg/chevron-down.svg';
function DrawerButton(props) {
  const active = useSelector((state)=>state.buttonbox.active[props.index])
  const dispatch = useDispatch();
  const drawer = useCallback(
    () => {
      console.log(props.enabled);
      if(props.enabled){
      dispatch({type: 'buttonbox/activeUpdate', payload: {index:props.index, state:!active}})
      }
    },
    [dispatch, props.index, active, props.enabled],
  )
  
  return (
    <div className='drawer' onClick={drawer}>
      <div className={`vectorbox ${active?'fill-yellow':'fill-blue'}`}>
        {props.children}
      </div>
      <span className='drawer-text'>{props.text}</span>
      <CevronDownVector className={`dcVectorstroke ${active?'chev-up stroke-yellow':'chev-down stroke-blue'}`}  />

    </div>
  )
}

export default DrawerButton