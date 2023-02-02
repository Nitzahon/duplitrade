import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Chart from 'chart.js/auto';

// import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

import './GraphFrame.css'
function GraphFrame() {
  const tabs = useSelector((state) => state.graphframe.tabs);
  const activeTab = useSelector((state) => state.graphframe.activeTab);
  const yAxis = useSelector((state)=>state.graphframe.yAxis)
  const dispatch = useDispatch();
  const activate = useCallback(
    (index) => () => {
      dispatch({ type: 'graphframe/tabActive', payload: index })
    },
    [dispatch],
  )

  // const labels = ['Jan\'11', 'Mar\'11', 'May\'11', 'Jan\'11', 'Mar\'11', 'May\'11', 'Jan\'11', 'Mar\'11'];

  // const options = {
  //   responsive: true,
  //   showXLabels: 6,
  //   plugins: {
  //     legend: {
  //       display: false,

  //     },
  //     title: {
  //       display: false,
  //       text: 'Chart.js Line Chart',
  //     },
  //   },
  // };
  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       pointStyle: 'rect',

  //       // data: datasetRed,
  //       borderColor: 'rgb(255, 99, 132)',
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       fill: 'start',
  //       pointStyle: 'circle',
  //       label: 'Dataset 2',
  //       data: datasetBlue,
  //       borderColor: 'rgb(53, 162, 235)',
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  //   scales: {
  //     xAxes: [{
  //       type: 'time',
  //       ticks: {
  //           autoSkip: true,
  //           maxTicksLimit: 20
  //       }
  //   }],
  //     y: {
  //       // ticks: {
  //       //   // Include a dollar sign in the ticks
  //       //   callback: function (value, index, ticks) {
  //       //     console.log(value, index);
  //       //     let retValue = '';
  //       //     if (value !== 0) {
  //       //       retValue = '$' + retValue

  //       //       if (value < 0) {
  //       //         retValue = '-' + retValue;
  //       //       }
  //       //     }
  //       //     console.log(retValue);
  //       //     return retValue + Math.abs(value).toLocaleString();
  //       //   }
  //       // }
  //       ticks: ['-400$','-200$','0','200$','400$','600$','800$','1000$']
  //     }
  //   },
  // };
  return (
    <div className='graphframe'>
      <div className='graph-tabs'>
        {tabs.map((tab, index) => {
          return <div key={index} className={'graph-tab tab-' + (activeTab === index ? 'active' : 'inactive')} onClick={activate(index)}>
            {tab}
          </div>
        })}
      </div>
      <div className='graph-body'>
        <div className='y-axis'>
          {yAxis.map(label=>{
            return<div className='y-axis-label'>{label}</div>
          })}
        </div>
        <img className='graph-img' src={process.env.PUBLIC_URL + '/images/image 7.png'} alt='graph'/>
        <div className='x-axis'></div>
        {/* <Line options={options} data={data} /> */}
      </div>
    </div>
  )
}

export default GraphFrame