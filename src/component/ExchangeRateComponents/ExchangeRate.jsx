
import BarChart from "./BarChart";
import PolarChart from "./PolarChart";
import Calendar from "./Calendar";
import LineChart from "./LineChart";

const ExchangeRate = function(){

    return(
      <div>
        <Calendar/>
        <div style={{
                    display: "flex", 
                    alignItems: "flex-start",
                    justifyContent: "space-between"
                    }}>
            <BarChart/>
            <PolarChart/>
        </div>
        <div style={{
                    display: "flex", 
                    alignItems: "flex-start",
                    justifyContent: "space-between"
                    }}>
            <LineChart/>
        </div>
      </div>  
    );
}

export default ExchangeRate;