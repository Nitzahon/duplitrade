import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './GraphTable.css'
import { ReactComponent as ChevronVector } from '../../../images/svg/chevron-down.svg';
import TableCard from './TableCard';
import TableRow from './TableRow';
function GraphTable() {
    const header = useSelector((state) => state.table.header);
    const isMobile = useSelector((state) => state.broker.isMobile);
    const startegies = useSelector((state) => state.table.strategies);
    const selectedIndex = useSelector((state) => state.table.selectedIndex);
    const page = useSelector((state) => state.table.page);
    const dispatch = useDispatch();
    const movePage = useCallback((index, active) => () => {
        console.log(index,active);
            if (active) {
                dispatch({ type: 'table/page', payload:index })
            }
        },
        [dispatch],
    )
    return (
        <div className='panel-body'>
            <div className='graph-strategy-table'>
                <div className='graph-strategy-header graph-strategy-row'>
                    {header.map((title, index) => {
                        return <div key={title} className={`grid-col grid-col-${index + 1}`}>
                            {title}
                        </div>
                    })}
                </div>
                <div className='border-seperator header-seperator'></div>
                {startegies[(isMobile ? 'mobile' : 'regular')].map((val, index) => {
                    return (isMobile ? <TableCard key={index} id={index} strat={val} /> : <div key={index}>
                        {index !== 0 ? <div className='border-seperator row-seperator'></div> : <></>}
                        <TableRow id={index} strat={{ ...val }} selected={selectedIndex === index} />

                    </div>)
                })}
                <div className='border-seperator footer-seperator'></div>

                <div className='graph-strategy-footer'>
                    <div className='page-bar'>
                        <div className={`page-arrow arrow-back ${page > 1 ? 'active' : ''}`} onClick={movePage(page - 1, page !== 1)}><ChevronVector/></div>
                        <div className={`page-number-box ${page === 1 ? 'active' : ''}`} onClick={movePage(1, page !== 1)}>1</div>
                        <div className={`page-number-box ${page === 2 ? 'active' : ''}`} onClick={movePage(2, page !== 2)}>2</div>
                        <div className={`page-number-box ${page === 3 ? 'active' : ''}`} onClick={movePage(3, page !== 3)}>3</div>
                        <div className={`page-number-box`}>...</div>
                        <div className={`page-number-box ${page === 4 ? 'active' : ''}`} onClick={movePage(4, page !== 4)}>32</div>
                        <div className={`page-arrow arrow-forward ${page < 4 ? 'active' : ''}`} onClick={movePage(page + 1, page !== 4)}><ChevronVector/></div>
                    </div>
                    <div className={'select-container'}>
                        <span>Showing</span>
                        <img className='placeholder-select' src={`/images/selectPlaceholder.png`} alt={''}></img>
                        <span>of 162 result(s)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphTable