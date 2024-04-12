import { createContext, useContext, useEffect, useState } from "react";
import {featch_config} from "./featch_config";
import {dateToString, stringToDate} from "./dateFormat";

const AppContext = createContext();

export const useAppContext = function(){
    return useContext(AppContext);
}

export const AppProvider = function({children}){

    const [balance, setBalance] = useState();
    const [bankExpense, setBankExpense] = useState();
    const [bankIncome, setBankIncome] = useState();
    const [reserve, setReserve] = useState();
    const [viewMode, setViewMode] = useState(false);

    const [endDate, setEndDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date(endDate.getFullYear()-1, endDate.getMonth(), endDate.getDate()));

    const balanceUpdate = async function(){

        try{
            const httpQueqy = `${featch_config.BASE_URL}${featch_config.PATH_STAT}${featch_config.EX_DEBT}?start=${dateToString(startDate)}&end=${dateToString(endDate)}&json`;
            const responce = await fetch(httpQueqy);
            const data = await responce.json();

            setBalance(data.sort((a,b)=>{
                const aDate = stringToDate(a.dt);
                const bDate = stringToDate(b.dt);

                return aDate.getTime() - bDate.getTime();
            }));
        }
        catch(error){
            console.error(error);
        }
    }

    const reserveUpdate = async function(){

        try{
            const httpQueqy = `${featch_config.BASE_URL}${featch_config.PATH_STAT}${featch_config.RESERVE}?start=${dateToString(startDate)}&end=${dateToString(endDate)}&json`;
            const responce = await fetch(httpQueqy);
            const data = await responce.json();

            setReserve(data.sort((a,b)=>{
                const aDate = stringToDate(a.dt);
                const bDate = stringToDate(b.dt);

                return aDate.getTime() - bDate.getTime();
            }));
        }
        catch(error){
            console.error(error);
        }
    }

    const bankStatUpdate = async function(){

        try{
            const httpQueqy = `${featch_config.BASE_URL}${featch_config.PATH_STAT}${featch_config.BANKSINCEXP}?start=${dateToString(startDate)}&end=${dateToString(endDate)}&json`;
            const responce = await fetch(httpQueqy);
            const data = await responce.json();
            
            const dataExpense = data.filter((item)=>item.txten.indexOf('expense') !== -1);
            const dataIncome = data.filter((item)=>item.txten.indexOf('income') !== -1);

            setBankExpense(dataExpense.sort((a,b)=>{
                const aDate = stringToDate(a.dt);
                const bDate = stringToDate(b.dt);

                return aDate.getTime() - bDate.getTime();
            }));
            setBankIncome(dataIncome.sort((a,b)=>{
                const aDate = stringToDate(a.dt);
                const bDate = stringToDate(b.dt);

                return aDate.getTime() - bDate.getTime();
            }));
        }
        catch(error){
            console.error(error);
        }
    }

    const toogleViewMode = () => setViewMode(!viewMode);

    useEffect(()=>{
        if (startDate.getTime() === endDate.getTime()){
            startDate.setDate(startDate.getDate()-1);
        }

        bankStatUpdate();
        reserveUpdate();
        balanceUpdate();
    },[startDate, endDate]);

    return(
        <AppContext.Provider value={{
            balance, 
            startDate ,setStartDate, 
            endDate ,setEndDate,
            reserve,
            viewMode, toogleViewMode,
            bankExpense, bankIncome,
        }}>
            {children}
        </AppContext.Provider>
    );
}

// https://bank.gov.ua/NBM_Exchange/exchange_site?start=20200101&end=20240217&valcode=usd&sort=exchangedate&order=desc&json
// https://bank.gov.ua/NBU_Exchange/exchange_site?start=20200101&end=20240217&valcode=usd&sort=exchangedate&order=desc&json
// https://bank.gov.ua/NBUStatService/v1/statdirectory/grossextdebt?start=20160301&end=20170601&json
