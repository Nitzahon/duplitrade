import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GraphBody from './GraphBody/GraphBody';

import './GraphFrame.css'
import GraphTable from './GraphTable/GraphTable';
function GraphFrame() {
  const tabs = useSelector((state) => state.graphframe.tabs);
  const activeTab = useSelector((state) => state.graphframe.activeTab);
  const dispatch = useDispatch();

  const activate = useCallback(
    (index) => () => {
      dispatch({ type: 'graphframe/tabActive', payload: index })
    },
    [dispatch],
  )

  return (
    <div className='graphframe'>
      <div className='graph-tabs'>
        {tabs.map((tab, index) => {
          return <div key={index} className={'graph-tab tab-' + (activeTab === index ? 'active' : 'inactive')} onClick={activate(index)}>
            {tab}
          </div>
        })}
      </div>
      <GraphBody/>
      <GraphTable/>
    </div>
  )
}

export default GraphFrame
