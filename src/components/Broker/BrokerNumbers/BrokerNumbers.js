import React from 'react'
import ValueCards from './ValueCards';

function BrokerNumbers(props) {
  const data = Object.entries(props);
  return (
    <div className='broker-numbers'>
      {data.map((pair,i)=>{
        return <ValueCards key={i} keyName={pair[0]} value={pair[1]}/>
      })}
    </div>
  )
}

export default BrokerNumbers