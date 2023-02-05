import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Switch from "react-switch";
import './CopyBox.css'
function CopyBox({ id, strat, close }) {
  const [lotSize, setLotSize] = useState(2);
  const [ready, setReady] = useState(true);
  const [trade, setTrade] = useState(true);
  const isMobile = useSelector(state => state.broker.isMobile);
  const symbols = useSelector((state) => state.table.symbols)
  const dispatch = useDispatch()
  const sendToBroker = useCallback(
    () => {
      setReady(false)
      dispatch({ type: 'table/copied', payload: { stratType: (isMobile ? 'mobile' : 'regular'), index: id, state: null } })
      setTimeout(() => {
        dispatch({type:'table/copied', payload:{stratType:(isMobile?'mobile':'regular'), index:id, state:{lotSize:lotSize, ticket: Math.floor(1000000 + Math.random() * 9000000)}}})
        setReady(true);
      }, 5000);
    },
    [dispatch, setReady, lotSize, id, isMobile],
  )

  return (
    <div className='copy-box' onClick={(e) => { e.preventDefault(); e.stopPropagation() }}>
      <div className='infobox'>
        <div className='strat-title'>{strat.Strategy} Strategy</div>
        <div className='strat-data'>
          <div className='strat-symbol'>
            <span>Symbol</span>
            <div>{strat.Symbol}</div>
          </div>
          <div className='strat-size'>
            <span>Size</span>
            <div>{strat.Size.toFixed(2)}</div>
          </div>
        </div>
        <div className='win-lose-box'>
          <div className='win-lose-color-bars'>
            <div className='win-bar' /><div className='lose-bar' />
          </div>
          <div className='win-lose-precentage'>
            <div className='win-percent'>Win 56%</div>
            <div className='lose-percent'>Loss 44%</div>
          </div>
          <div className='win-lose-trade'>
            <div className='win-trade'>440 Trades</div>
            <div className='lose-trade'>560 Trades</div>
          </div>
          <div className='warning-box'>
            <i className="fa-solid fa-circle-info icon-info" />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </span>
          </div>
        </div>
      </div>
      <div className='lot-size-text'>Select Lot Size</div>
      <div className='lot-size-select'>
        <div className={`size-change size-decrease ${ready ? 'ready' : ''}`} onClick={(e) => { e.preventDefault(); if (ready && lotSize > 0) setLotSize(lotSize - 1) }}><i className="fa-solid fa-minus fa-lg"></i></div>
        <span>{(lotSize / 100).toFixed(2)}</span>
        <div className={`size-change size-decrease ${ready ? 'ready' : ''}`} onClick={(e) => { e.preventDefault(); if (ready) setLotSize(lotSize + 1) }}><i className="fa-solid fa-plus fa-lg"></i></div>
      </div>
      {!ready || strat.copied ?
        <div className='legal-info-slide'>
          <div className='legal-info'>The trade will be opened on my account
          </div>
          <Switch className='legal-slide' onColor='#cee8d9' onHandleColor='#31a060' onChange={(e) => { setTrade(e) }} checked={trade} uncheckedIcon={false} checkedIcon={false} handleDiameter={20} height={14} width={34} />
        </div>
        : <></>}
      {lotSize === strat.copied?.lotSize ?
        <div className='success'>
          <div className='success-title'>
            <i className="fa-solid fa-circle-check fa-lg success-check"></i>
            <span>Trade generated</span>
          </div>
          <div className='success-details'>
            TicketID #{strat.copied.ticket}<br />
            {strat['Buy/Sell']} {(strat.copied.lotSize / 100).toFixed(2)} {strat.Symbol}<br />
            P/L {`${strat['Net P/L'] < 0 ? '-' : ''}${(symbols[strat.Symbol])}${strat['Net P/L']}`}
          </div>
        </div>
        :
        (ready ? <div className='market-execution' onClick={sendToBroker}>
          <div className='market-execution-text'>
            <span className='market-execution-title'>Market Execution</span>
            <span className='market-execution-details'>{strat["Buy/Sell"]} {(lotSize / 100).toFixed(2)}</span>
          </div>
        </div> :
          <div className='sending-button'>
              <i class="fa-sharp fa-solid fa-circle-notch spinner broker-spinner"></i>
              <span>Sent to the broker</span>
          </div>)
      }
      <div className='copy-cancel' onClick={() => { close() }}>Cancel</div>
    </div>
  )
}

export default CopyBox