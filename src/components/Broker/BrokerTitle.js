import React from 'react'

function BrokerTitle(props) {
    // const broker = {...props,date:date.setDate(date.getDate() - 103*7 )}
    function getWeeksDiff(startDate, endDate) {
        const msInWeek = 1000 * 60 * 60 * 24 * 7;
        const date = new Date();
        return Math.round(Math.abs(endDate - date.setDate(date.getDate() - startDate * 7)) / msInWeek);
    }
    return (
        <div className='broker-title'>
            <div className='broker-title-name'>{props.name}</div>
            <div className='broker-title-numbers'>

                <div className='broker-title-perc'>{props.perc}%</div>
                <div className='broker-title-win'>
                    <div>
                        {props.win}
                    </div>
                    <div>
                        Win %
                    </div>
                </div>
                <div className='broker-title-date'>
                    <div>

                        {getWeeksDiff(props.date, Date.now())}
                    </div>
                    <div>
                        Age (weeks)
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BrokerTitle