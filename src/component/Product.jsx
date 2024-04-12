
import { useEffect } from "react";
import {useAppContext} from "../utils/AppContext"

const Product = function(){

    const {balance, balanceUpdate} = useAppContext();

    const fecthRateData = async() => {
        try{
          balanceUpdate();
        }
        catch(error){
            console.error(error);
        }
    }

    return(
      <div>
        {balance.map((x)=>{
          return (<div>
            {x.dt}
          </div>);
        })}
      </div>  
    );
}

export default Product;