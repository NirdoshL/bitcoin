import React from 'react'
import {useState,useEffect} from "react"
import ReactApexChart from "react-apexcharts"
import FetchingMarket from '../api/fetch'
import {url} from '../data/data'

export default function GraphicalView() {

    const fetchedData= FetchingMarket(url);

    const [chartData,setChartData]=useState({
        chart: {
            id: "bar-graph"
          },
          xaxis: {
            categories: []
          }
    });

    const[chartSeries,setChartSeries]=useState([{
              name: "bitcoin",
              data: []
    }]);
  

useEffect(()=>{

    const x=["0"];
    const y=["0"];

    const getData=()=>{
        fetchedData.map((item)=>{
          x.push(item.current_price);
          y.push(item.name);
        }
      );}

      getData();
  
    setChartData({
    chart: {
        id: "bar-graph"
      },
      xaxis: {
        categories: y
      }
});
    setChartSeries([
    {
        name: "bitcoin",
        data: x
      }
    ]
);
console.log(x);
},[])
   
  

  return (
    <div id='graph' style={{width:"100%",height:"80vh"}}>
    <ReactApexChart options={chartData}
     series={chartSeries} type="line" width="1000px" />
    </div>
  )
}


