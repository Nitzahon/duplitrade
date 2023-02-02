import React from 'react'
import BrokerTitle from './BrokerTitle'
import "./Broker.css"
import BrokerDesc from './BrokerDesc'
import BrokerNumbers from './BrokerNumbers/BrokerNumbers'
import { useSelector } from 'react-redux'
function Broker() {
  const broker= useSelector((state) => state.broker)
  return (
    <div className='broker'>
        <BrokerTitle {...broker.title}/>
        <BrokerDesc desc={broker.desc}/>
        <BrokerNumbers {...broker.numbers}/>
    </div>
  )
}

export default Broker