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
  console.log(data?.map(price=>price.time_close)??[]);
  return (
    <div>{isLoading?"Loading Chart..." : <ApexChart 
  type="candlestick"
  series={[
    {
      name:"Price",
      data:[{
        x:data?.map(price=>price.time_close)[0],
        y:[
          data?.map(price=>price.open)[0].toFixed(3),
          data?.map(price=>price.high)[0].toFixed(3),
          data?.map(price=>price.low)[0].toFixed(3),
          data?.map(price=>price.close)[0].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[1],
        y:[
          data?.map(price=>price.open)[1].toFixed(3),
          data?.map(price=>price.high)[1].toFixed(3),
          data?.map(price=>price.low)[1].toFixed(3),
          data?.map(price=>price.close)[1].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[2],
        y:[
          data?.map(price=>price.open)[2].toFixed(3),
          data?.map(price=>price.high)[2].toFixed(3),
          data?.map(price=>price.low)[2].toFixed(3),
          data?.map(price=>price.close)[2].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[3],
        y:[
          data?.map(price=>price.open)[3].toFixed(3),
          data?.map(price=>price.high)[3].toFixed(3),
          data?.map(price=>price.low)[3].toFixed(3),
          data?.map(price=>price.close)[3].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[4],
        y:[
          data?.map(price=>price.open)[4].toFixed(3),
          data?.map(price=>price.high)[4].toFixed(3),
          data?.map(price=>price.low)[4].toFixed(3),
          data?.map(price=>price.close)[4].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[5],
        y:[
          data?.map(price=>price.open)[5].toFixed(3),
          data?.map(price=>price.high)[5].toFixed(3),
          data?.map(price=>price.low)[5].toFixed(3),
          data?.map(price=>price.close)[5].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[6],
        y:[
          data?.map(price=>price.open)[6].toFixed(3),
          data?.map(price=>price.high)[6].toFixed(3),
          data?.map(price=>price.low)[6].toFixed(3),
          data?.map(price=>price.close)[6].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[7],
        y:[
          data?.map(price=>price.open)[7].toFixed(3),
          data?.map(price=>price.high)[7].toFixed(3),
          data?.map(price=>price.low)[7].toFixed(3),
          data?.map(price=>price.close)[7].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[8],
        y:[
          data?.map(price=>price.open)[8].toFixed(3),
          data?.map(price=>price.high)[8].toFixed(3),
          data?.map(price=>price.low)[8].toFixed(3),
          data?.map(price=>price.close)[8].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[9],
        y:[
          data?.map(price=>price.open)[9].toFixed(3),
          data?.map(price=>price.high)[9].toFixed(3),
          data?.map(price=>price.low)[9].toFixed(3),
          data?.map(price=>price.close)[9].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[10],
        y:[
          data?.map(price=>price.open)[10].toFixed(3),
          data?.map(price=>price.high)[10].toFixed(3),
          data?.map(price=>price.low)[10].toFixed(3),
          data?.map(price=>price.close)[10].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[11],
        y:[
          data?.map(price=>price.open)[11].toFixed(3),
          data?.map(price=>price.high)[11].toFixed(3),
          data?.map(price=>price.low)[11].toFixed(3),
          data?.map(price=>price.close)[11].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[12],
        y:[
          data?.map(price=>price.open)[12].toFixed(3),
          data?.map(price=>price.high)[12].toFixed(3),
          data?.map(price=>price.low)[12].toFixed(3),
          data?.map(price=>price.close)[12].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[13],
        y:[
          data?.map(price=>price.open)[13].toFixed(3),
          data?.map(price=>price.high)[13].toFixed(3),
          data?.map(price=>price.low)[13].toFixed(3),
          data?.map(price=>price.close)[13].toFixed(3)
        ]
      },
      {
        x:data?.map(price=>price.time_close)[14],
        y:[
          data?.map(price=>price.open)[14].toFixed(3),
          data?.map(price=>price.high)[14].toFixed(3),
          data?.map(price=>price.low)[14].toFixed(3),
          data?.map(price=>price.close)[14].toFixed(3)
        ]
      },
    ]
    }
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
    xaxis: {
      axisBorder:{show:false},
      axisTicks:{show:false},
      type:"datetime",
      labels:{show:true, datetimeFormatter: {month: "mmm 'yy"},},
      categories:data?.map(price=>price.time_close)??[],
      },
    yaxis: {
      show:false,
    },
    grid:{
      show:false,
    },
  }}
  />}
</div>
//   type="line" 
//   series={[
//     { 
//       name:"Price", 
//       data:data?.map(price=>price.close)??[]
//     },
//   ]}
//   options={{
//     theme:{
//       mode:"dark",
//     },
//     chart:{
//     height:400,
//     width:500,
//     background:"transparent",
//     toolbar:{
//       show:false,
//     }
//     },
//     grid:{
//       show:false,
//     },
//     stroke:{
//       curve:"smooth",
//       width:4,
//     },
//     xaxis: {
//       axisBorder:{show:false},
//       axisTicks:{show:false},
//       type:"datetime",
//       labels:{show:false, datetimeFormatter: {month: "mmm 'yy"},},
//       categories:data?.map(price=>price.time_close)??[],
//     },
//     yaxis: {
//       show:false,
//     },
//     fill: {
//       type: "gradient",
//       gradient:{gradientToColors:["#0be881"],stops:[0,100]},
//     },
//     colors:["#0fbcf9"],
//     tooltip: {
//       y:{
//         formatter:(value)=>`$${value.toFixed(2)}`
//       },
//       x:{
//         show:true,
//       }
//     }
// }}/>}
// </div>
);
}
  
  export default Chart;