import {Bar} from "react-chartjs-2";
import React from "react";
import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            labels: {
                color: '#FFFFFF',
                fontSize: 20,
            }
        },
        title: {
            display: true,
            text: 'Items re-used',
            color: '#000000',
            font: {
                size: '40vh',
                weight: 300,
                family: 'Comfortaa',
            }
        },
        maintainAspectRatio: false,
    },
    scales: {
        x: {
            ticks: {
                color: '#000000',
                font: {
                    size: '18vh',
                    family: 'Comfortaa',
                }
            }
        },
        y: {
            ticks: {
                color: '#000000',
                font: {
                    size: '18vh',
                    family: 'Comfortaa',
                }
            }
        }
    }
};


export const AuctionChart = (props) => {

    const data = {
        labels: props.data.label,
        datasets: [
            {
                label: 'Auctions',
                data: props.data.data,
                backgroundColor: '#009900',
                color: '#000000',
            },
        ],
    };

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );


    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <>
            <div className='billingChart'>
                <Bar
                    options={options}
                    data={data}
                />
            </div>
        </>
    )
}