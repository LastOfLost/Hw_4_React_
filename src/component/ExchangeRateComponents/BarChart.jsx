import React, { useEffect, useState } from 'react'
import { Bar, Chart } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import s from "../../styles/chart.module.css";
import { FilterValueByYear, FilterValueByYearMonth } from '../../utils/dataFilter';
import { useAppContext } from '../../utils/AppContext';
import { FormControlLabel } from '@mui/material';
import MySwitch from "../ExchangeRateComponents/MySwitch"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export default function BarChart() {

    const {balance, viewMode, toogleViewMode} = useAppContext()
    const [filterData, setFilserData] = useState([]);

    const data = {
        labels: [],
        datasets: [{
            label: "balance",
            data: filterData,
            backgroundColor: "#f2efff",
            hoverBackgroundColor: "#5932ea",
            borderRadius: '10',
        }],
    };

    useEffect(()=>{
        if(viewMode){
            setFilserData(FilterValueByYearMonth(balance));
        }
        else{
            setFilserData(FilterValueByYear(balance));
        }
    }, [balance, viewMode])

    const options = {
        responsive: true,
        scales: {
            x: {beginingZero: true, grid: {display: false}},
            y: {beginingZero: true, grid: {display: false}, display: false},
        },
    };

    const onSwitchChange = () => {
        toogleViewMode();
    }

  return (
    <div className={s.barChart}>
        <div>
            <FormControlLabel onChange={onSwitchChange} control={<MySwitch sx={{ m: 1 }}/>} />
            <p style={{fontWeight: 700, fontSize: 18, color: "#5932ea", marginLeft: 4}}>View: {viewMode ? "more" : "less"}</p>
        </div>

      <Bar data={data} options={options}></Bar>
    </div>
  )
}
//https://bank.gov.ua/NBUStatService/v1/statdirectory/grossextdebt?start=20190508&end=20240410&json
//https://bank.gov.ua/NBUStatService/v1/statdirectory/grossextdebt?start=19910101&end=20240409&json