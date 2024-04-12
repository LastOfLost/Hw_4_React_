
export function randomColor(){
    return `rgb(${Math.random() * 156 + 100}, ${Math.random() * 156 + 100}, ${Math.random() * 156 + 100})`;
}

export function getColorsArray(length){

    const colors = [];
    for(let i = 0; i < length; i++){
        colors.push(randomColor());
    }

    return colors;
}