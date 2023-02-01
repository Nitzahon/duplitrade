import React from 'react'
import BrokerTitle from './BrokerTitle'
import "./Broker.css"
import BrokerDesc from './BrokerDesc'
import BrokerNumbers from './BrokerNumbers/BrokerNumbers'
function Broker({title, desc, numbers}) {
  return (
    <div className='broker'>
        <BrokerTitle {...title}/>
        <BrokerDesc desc={desc}/>
        <BrokerNumbers {...numbers}/>
    </div>
  )
}

export default Broker