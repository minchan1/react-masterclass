import { useQuery } from "react-query";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";

const PriceDiv = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;

const PriceSpan = styled.span`
  margin:10px 0px;
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
      USD: {
          ath_date:string;
          ath_price:number; 
          market_cap:number; 
          market_cap_change_24h:number; 
          percent_change_1h:number; 
          percent_change_1y:number; 
          percent_change_6h:number; 
          percent_change_7d:number; 
          percent_change_12h:number; 
          percent_change_15m:number; 
          percent_change_24h:number; 
          percent_change_30d:number; 
          percent_change_30m:number; 
          percent_from_price_ath:number; 
          price:number; 
          volume_24h:number; 
          volume_24h_change_24h:number;
      }
  };
}

interface PriceProps {
  coinId : string;
}

function Price({coinId}:PriceProps) {
  const {isLoading:tickersLoading, data:tickersData} = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval:5000,
    }
    );
    return (
      <PriceDiv>
        <PriceSpan>Last Updated : {tickersData?.last_updated.slice(0,10)}</PriceSpan>
        <PriceSpan>Current Price : ${tickersData?.quotes.USD.price.toFixed(3)}</PriceSpan>
        <PriceSpan>Weekly change : {tickersData?.quotes.USD.percent_change_7d}%</PriceSpan>
        <PriceSpan>Monthly change : {tickersData?.quotes.USD.percent_change_30d}%</PriceSpan>
      </PriceDiv>
    )
  }
  
  export default Price;