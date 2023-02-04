import React from 'react'
// eslint-disable-next-line
import Chart from 'chart.js/auto';

import { Line } from 'react-chartjs-2';
function ResponsiveGraph({mobile}) {
    const labels = Array(mobile?16:28).fill('');

    const options = {
        responsive: true,
        scales: {
            y: {
                min: -500,
                max: mobile?1300:1150,
                border: {
                    display: false
                },
                ticks:
                {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    major: false,
                    display: false,
                }
            },
        },
        plugins: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            },
            legend: {
                display: false,

            },
            title: {
                display: false,
            },
        },
    };
    const data = {
        labels,
        datasets: [
            {
                data: [...(!mobile ? ['-75', ' 0', '-350', ' -300', ' 75', '75']:[]), ' -50', ' 75', ' 325', ' 925', ' 700', ' 800', ' 800', ' 750', ' 675', ' 500', ' 300', ' 250', ' 175', ' 175', ' 125', ' 500', ' 650', ' 500', ' 650', ' 500', ' 500', ' 450'],
                pointStyle: 'rect',
                borderColor: 'rgb(165, 42, 42)',
                backgroundColor: 'rgba(165, 42, 42, 0.5)',
            },
            {
                fill: 'start',
                pointStyle: 'circle',
                data: [...(!mobile ? ['-75', ' -25', '-150', ' -100', ' -100','-100']:[]), ' -100', ' 75', ' 250', ' 750', ' 950', ' 1100', ' 1100', ' 1100', ' 975', ' 700', ' 400', ' 275', ' 150', ' 150', ' 150', ' 350', ' 650', ' 550', ' 700', ' 400', ' 400', ' 400'],
                borderColor: 'rgb(86, 140, 243)',
                backgroundColor: 'rgba(86, 140, 243,.75)',
            },
        ],

    };
    return (
        <Line options={options} data={data} />)
}

export default ResponsiveGraph