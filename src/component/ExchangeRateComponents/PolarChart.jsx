import React, {useEffect, useState} from 'react'
import { Doughnut } from 'react-chartjs-2'
import s from "../../styles/chart.module.css";
import { getColorsArray } from '../../utils/randomColor';
import { useAppContext } from '../../utils/AppContext';
import { FilterValueByName, ObjToArray } from '../../utils/dataFilter';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  );

export default function PolarChart() {
    const {balance} = useAppContext()
    const [filterData, setFilserData] = useState([]);
    const [colors, setColors] = useState([]);


    const data = {
        length: [],
        datasets: [{
            data: filterData ? filterData.map((item) => item.value) : [],
            my_labels: filterData ? filterData.map((item) => item.key) : [],
            backgroundColor: colors,
            hoverBackgroundColor: "#5932ea",
            borderWidth: 0,
            hoverOffset: 15,
        }]
    };
    
    
    
    useEffect(()=>{
        setFilserData(ObjToArray(FilterValueByName(balance)));
        setColors(getColorsArray(filterData.length));
    }, [balance])

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            text: 'dd',
          },
          title: {
            display: true,
            text: 'Balance by group',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const index = context.dataIndex;
                const value = context.dataset.data[index];
                const key = context.dataset.my_labels[index];
                return `${value} - ${key}`;
              }
            }
          }
        },
      };
    
  return (
    <div className={s.polarChart}>
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  )
}
