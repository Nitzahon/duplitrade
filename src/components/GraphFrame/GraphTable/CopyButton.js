import React, { useCallback } from 'react'
import { ReactComponent as DirectCopyVector } from '../../../images/svg/directCopyVector.svg';
import { ReactComponent as CopiedVector } from '../../../images/svg/copied.svg';

import { useDispatch, useSelector } from 'react-redux';
function CopyButton({selected, copied, id}) {
    const isMobile = useSelector(state=>state.broker.isMobile);
    const dispatch = useDispatch()

    const select = useCallback(
      () => {
        dispatch({ type: 'table/select', payload: {stratType:(isMobile? 'mobile':'regular'), index:id, state:!selected }})
        dispatch({type: 'buttonbox/active', payload:!selected})
      },
      [dispatch,id,isMobile,selected],
    )

  return (
    <div className={`copy-button-box ${copied?'vector-green':selected?'vector-yellow':'vector-gray'}`} onClick={select}>
        {copied?<CopiedVector/>:<DirectCopyVector/>}
    </div>
  )
}

export default CopyButton