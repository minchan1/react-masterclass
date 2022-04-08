import { useQuery } from "react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume:number;
  market_cap: number;
}

interface ChartProps {
  coinId : string;
}

function Chart({coinId}:ChartProps) {
  const {isLoading,data} = useQuery<IHistorical[]>(
    ["ohlcv",coinId],
    ()=>fetchCoinHistory(coinId),
    {
      refetchInterval:50000,
    }
    );
  return <div>{isLoading?"Loading Chart..." : <ApexChart 
  type="line" 
  series={[
    { 
      name:"Price", 
      data:data?.map(price=>price.close)??[]
    },
  ]}
  options={{
    theme:{
      mode:"dark",
    },
    chart:{
    height:400,
    width:500,
    background:"transparent",
    toolbar:{
      show:false,
    }
    },
    grid:{
      show:false,
    },
    stroke:{
      curve:"smooth",
      width:4,
    },
    xaxis: {
      axisBorder:{show:false},
      axisTicks:{show:false},
      type:"datetime",
      labels:{show:false, datetimeFormatter: {month: "mmm 'yy"},},
      categories:data?.map(price=>price.time_close)??[],
    },
    yaxis: {
      show:false,
    },
    fill: {
      type: "gradient",
      gradient:{gradientToColors:["#0be881"],stops:[0,100]},
    },
    colors:["#0fbcf9"],
    tooltip: {
      y:{
        formatter:(value)=>`$${value.toFixed(2)}`
      },
      x:{
        show:true,
      }
    }
}}/>}
</div>;
}
  
  export default Chart;