import React, { useEffect, useState } from 'react'

function ValueCards({ keyName, value }) {
    const key = keyName[0].toUpperCase() + keyName.substring(1);
    const [cardValue, setCardValue] = useState("");
    useEffect(() => {
        let strVal = ''
        if (value < 0) {
            strVal +="-";
        }
        strVal +="$" + Math.abs(value).toLocaleString();
        setCardValue(strVal);
    }, [value])

    return (
        <div className='broker-value-card'>
            <div className='broker-card-value'>
                {cardValue}
            </div>
            <div className='broker-card-key'>
                {key}
            </div>
        </div>
    )
}

export default ValueCards