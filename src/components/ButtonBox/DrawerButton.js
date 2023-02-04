import React from 'react'
import { ReactComponent as CevronDownVector } from '../../images/svg/chevron-down.svg';
function DrawerButton({ active, text, children}) {
  return (
    <div className='drawer'>
      <div className={`vectorbox ${active?'fill-yellow':'fill-blue'}`}>
        {children}
      </div>
      <span className='drawer-text'>{text}</span>
      <CevronDownVector className={`dcVectorstroke ${active?'chev-up stroke-yellow':'chev-down stroke-blue'}`}  />
    </div>
  )
}

export default DrawerButton