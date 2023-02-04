import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ResponsiveGraph from './ResponsiveGraph';
import './GraphBody.css'

function GraphBody() {
    const [bool, setBool] = useState(true);
    const xAxis = ["Jan'11", "Mar'11", "May'11"];
    const isMobileScreen = useSelector((state) => state.broker.isMobile)
    const [start, setStart] = useState(isMobileScreen ? 49.750 : -400);
    const [stop, setStop] = useState(isMobileScreen ? 51.00 : 1000);
    const [step, setStep] = useState(isMobileScreen ? .250 : 200);
    const [xAxisRep, setxAxisRep] = useState(isMobileScreen ? 1 : 3);
    const swap = useCallback(() => {
        setBool(current => !current);
      }, [setBool])
    useEffect(() => {
        setxAxisRep(isMobileScreen ? 1 : 3);
        setStart(isMobileScreen ? 49.750 : -400);
        setStop(isMobileScreen ? 51.00 : 1000);
        setStep(isMobileScreen ? .250 : 200);
      }, [isMobileScreen, setxAxisRep]);
  return (
    <div className='graph-body'>
        <div className='y-axis'>
          {Array.from(
            { length: (stop - start) / step + 1 },
            (value, index) => { let val = (start + index * step); return `${val < 0 ? '-' : ''}${!isMobileScreen && val !== 0 ? '$' : ''}${isMobileScreen? Math.abs(val).toPrecision(5):Math.abs(val).toLocaleString()}` }
          ).map((label, index) => {
            return <div key={index} className='y-axis-label'>{label}</div>
          })}
        </div>
        {bool ?
          <img className='graph-img' src={`/images/image7${isMobileScreen ? 'small' : ''}.png`} alt='graph' onClick={swap} />
          : <div className='graph-img' onClick={swap}>
            <ResponsiveGraph mobile={isMobileScreen} />
          </div>}
        <div className='x-axis'>
          {Array(xAxisRep).fill(xAxis).map((labelTrio, index) => {
            return <div className='label-trio' key={index}>
              {labelTrio.map((xLabel, index) => {
                return <div className='x-label-box' key={index}>
                  <div className='x-label-line' />
                  <span className='x-label'>
                    {xLabel}
                  </span>
                </div>
              })}
            </div>
          })}
        </div>
      </div>
  )
}

export default GraphBody