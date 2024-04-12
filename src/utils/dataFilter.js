
import {getMonthName, stringToDate} from "../utils/dateFormat"

export function FilterValueByYear(data){

    if(!data) return {};

    const result = {};
    
    data.forEach((item)=>{
        const key = `${stringToDate(item.dt).getFullYear()}`;
        if(!result[key]){
            result[key] = 0;
        }
        result[key] += item.value;
    });

    return result;
}

export function FilterValueByYearMonth(data){
    
    if(!data) return {};

    const result = {};
    
    data.forEach((item)=>{
        const key = `${getMonthName(stringToDate(item.dt).getMonth())} ${stringToDate(item.dt).getFullYear()}`;
        if(!result[key]){
            result[key] = 0;
        }
        result[key] += item.value;
    });

    return result;
}

export function FilterValueByName(data){
    
    if(!data) return {};

    const result = {};
    
    data.forEach((item)=>{
        const key = `${item.txt}`;
        if(!result[key]){
            result[key] = 0;
        }
        result[key] += item.value;
    });

    Object.keys(result).forEach((key) => {
        if(result[key] === 0) delete result[key];
    });

    return result;
}

export function ObjToArray(obj){
    const keys = Object.keys(obj);

    const result = [];
    keys.forEach((key) => {
        result.push({
            key: key,
            value: obj[key],
        });
    });

    return result;
}