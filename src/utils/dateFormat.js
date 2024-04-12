
export function dateToString(date){
    return  `${date.getFullYear()}` +
            `${date.getMonth()+1}`.padStart(2, '0') +
            `${date.getDate()}`.padStart(2, '0');
}

export function stringToDate(str){
    const year = str.substr(0,4);
    const month = str.substr(4,2);
    const day = str.substr(6,2);

    return new Date(year, month, day);
}

export function getMonthName(month){
    return new Date(1, month, 1).toLocaleDateString("en-EN", {
        month: 'long',
    });
}