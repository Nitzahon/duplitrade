import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CopyBox from '../../CopyBox/CopyBox';
import CopyButton from './CopyButtons/CopyButton'
function TableCard({id, strat }) {
  const [selected, setSelected] = useState(false);
  const symbols = useSelector(state=> state.table.symbols);
  const netPL = strat["Net P/L"];
  const netPLFormatted = `${netPL<0?'-':''}${netPL!==0?symbols[strat.Symbol]:''}${Math.abs(netPL).toFixed(2)}`
  return (
    <div className='card-container'>
      <div className='card-header strategy'>
        <div className='header-flex-start'>
          <div className='strategy-title'>
            <i className={'icon fas fa-chevron-down icon-blue'} />
            <span>{strat.Strategy}</span>
          </div>
          <div className='symbol'>{strat.Symbol}</div>
        </div>
        <div className='buy-sell'>{strat["Buy/Sell"]}</div>
      </div>
      <div className='row row-ticket'>
        <div className='row-text'>Ticket</div>
        <div className='row-data'>{strat.Ticket || '-'}</div>
      </div>
      <div className='row row-size'>
        <div className='row-text'>Size</div>
        <div className='row-data'>{strat.Size || '-'}</div>
      </div>
      <div className='row row-open'>
        <div className='row-text'>Open</div>
        <div className='row-data'>{strat.Open || '-'}</div>
      </div>
      <div className='row row-stop'>
        <div className='row-text'>Stop</div>
        <div className='row-data'>{strat.Stop || '-' }</div>
      </div>
      <div className='row row-limit'>
        <div className='row-text'>Limit</div>
        <div className='row-data'>{strat.Limit || '-'}</div>
      </div>
      <div className='row row-current'>
        <div className='row-text'>Current</div>
        <div className='row-data'>{strat.Current || '-'}</div>
      </div>
      <div className='beta-row row-net-pl'>
        <div className='row-text'>Net P/L</div>
        <div className={`row-data ${(netPL>0?'positive':netPL<0?'negative':'')}`}>{netPLFormatted|| '-'}</div>
      </div>
      <div className='row row-open-time'>
        <div className='time-title'>Open Time (GMT):</div>
        <div className='time-data'>{strat["Open Time (GMT)"] || '-'}</div>
      </div>
      <div className='copy-button' onClick={ () => {setSelected(current => !current)}}><CopyButton id={id} selected={selected} copied={strat.copied} text={true}/></div>
       {selected && <CopyBox selected={selected} id={id} strat={strat} close={() => {setSelected(false)}} />}
    </div>
  )
}

export default TableCard