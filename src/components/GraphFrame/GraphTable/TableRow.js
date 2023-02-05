import React from 'react'
import { useSelector } from 'react-redux'
import CopyButton from './CopyButtons/CopyButton';

function TableRow({selected, strat, id }) {
    const header = useSelector(state=> state.table.header);
    const symbols = useSelector(state=> state.table.symbols);
    
  return (
    <div className={`graph-strategy-row body-row ${selected?'selected-row':''}`}>
        {header.map((key,index)=>{
            let val= strat[key]
            if(!val){
                return <div key={index} className={`grid-col grid-col-${index+1}`}>
                    {key==="Copy"?<CopyButton id={id} selected={selected} copied={strat.copied}/>:<></>}
                </div>
              }
              if(key==="Net P/L"){

                val = `${val<0?'-':''}${symbols[strat["Symbol"]]}${Math.abs(val).toFixed(2)}`;
              }  
            return <div key={index} className={`grid-col grid-col-${index+1} ${key!=="Net P/L"?'':`net-${strat[key]<0?'negative':'positive'}`}`} >
                {val}
            </div>
        })}
    </div>
  )
}

export default TableRow