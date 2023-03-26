import React from 'react'
import {useState} from 'react'
import {Input,InputGroup,InputLeftElement,Flex} from "@chakra-ui/react"
import {FaSearch} from "react-icons/fa"
import CardView from './cardView'
import FetchingMarket from '../api/fetch'
import {url} from "../data/data"




export default function CoinList() {
  const[searchqry,setSearchQry]=useState("");
  const handleEvent=(e)=>{
     setSearchQry(e.target.value);
  }
  const data=FetchingMarket(url);
  return (
    <div>
         <Flex flexDirection={"column"} justify={"center"} align={"center"}>
         <InputGroup width={"50%"}>
            <InputLeftElement
            children={<FaSearch/>}
            onClick={()=>alert("hi")}
            />
            <Input placeholder='Search.....' value={searchqry} onChange={handleEvent} />
            </InputGroup>
         </Flex>
         <Flex  flexWrap={"wrap"} justifyContent={"space-evenly"}>
         {
            data.filter((items)=>{
              return  searchqry.toLowerCase()===""?items
              :
              items.name.toLowerCase().includes(searchqry.toLowerCase())})
              .map((item,index)=>(
                <div key={index}>
                <CardView 
                 title={item.name}
                  img={item.image}
                  url={null}
                  symbol={"$"}
                  price={item.current_price}
                   rank={item.market_cap_rank}/>
                </div>
            ))
         }
         </Flex>
    </div>
  )
}
