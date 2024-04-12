import React, {useEffect, useState} from 'react'
import { Line } from 'react-chartjs-2'
import s from "../../styles/chart.module.css";
import { getColorsArray, randomColor } from '../../utils/randomColor';
import { useAppContext } from '../../utils/AppContext';
import { FilterValueByName, FilterValueByYear, FilterValueByYearMonth, ObjToArray } from '../../utils/dataFilter';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export default function LineChart() {
    const {reserve, viewMode,  bankExpense, bankIncome} = useAppContext()
    const [filterData, setFilserData] = useState([]);
    const [incomeFilterData, setIncomeFilserData] = useState([]);
    const [expenseFilterData, setExpenseFilserData] = useState([]);

    const data = {
      labels:  [],
      datasets: [
        {
          label: "reserves",
          data: filterData ,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: "bank income",
            data: incomeFilterData ,
            borderColor: 'rgb(53, 235, 162)',
            backgroundColor: 'rgba(53, 235, 162, 0.5)',
        },
        {
            label: "bank expense",
            data: expenseFilterData ,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ]
    };
    
    useEffect(()=>{
        if(viewMode){
            setFilserData(FilterValueByYearMonth(reserve));
            setExpenseFilserData(FilterValueByYearMonth(bankExpense));
            setIncomeFilserData(FilterValueByYearMonth(bankIncome));
        }
        else{
            setFilserData(FilterValueByYear(reserve));
            setExpenseFilserData(FilterValueByYear(bankExpense));
            setIncomeFilserData(FilterValueByYear(bankIncome));
        }
    }, [reserve, viewMode])

    const options = {
        responsive: true,
        scales: {
            x: {beginingZero: true, grid: {display: false}},
            y: {beginingZero: true, grid: {display: false}, display: false},
        },
    };
    
  return (
    <div className={s.lineChart}>
      <Line  data={data} options={options}></Line>
    </div>
  )
}
