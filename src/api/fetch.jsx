import {useState,useEffect} from "react"
import axios from "axios"

export default function FetchingMarket(props) {
    const [market,setMarket]=useState([])
     useEffect(()=>{
      const getData=async()=>await axios.get(`${props}`)
      .then((res)=>{
        setMarket(res.data)
      });
      getData();
     },[]);


  return market;
}
