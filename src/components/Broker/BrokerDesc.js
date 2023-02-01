import React, { useState } from 'react'

function BrokerDesc({ desc }) {
  const text = desc;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className='broker-description'>
      <p className="text">
        {isReadMore ? text.slice(0, 78) : text}

      </p>
      <div onClick={toggleReadMore} className="read-or-hide">
        <span>
        {isReadMore ? "Read more" : "Show less"}
        </span>
        <i className={'icon fas fa-chevron-' + (isReadMore ? 'down' : 'up')}/>
      </div>
    </div>
  );
};


export default BrokerDesc