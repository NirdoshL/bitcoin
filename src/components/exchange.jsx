import React, { useEffect } from 'react'
import {useState} from 'react'
import {Input,
   InputGroup,
   InputLeftElement,
   Button,
   Flex} from "@chakra-ui/react"
import {FaSearch} from "react-icons/fa"
import CardView from './cardView'
import FetchingMarket from '../api/fetch'
import {exgInr} from "../data/data"




export default function Exchange() {
  const[searchqry,setSearchQry]=useState("");
  const handleEvent=(e)=>{
     setSearchQry(e.target.value);
  }

 const data=FetchingMarket(exgInr);
 
  console.log(data)
  return (
    <div>
         <Flex flexDirection={"column"} justify={"center"} align={"center"}>
         <InputGroup width={"50%"}>
            <InputLeftElement
            children={<FaSearch/>}
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
                <>
                <CardView key={index}
                 title={item.name}
                  img={item.image}
                  url={item.url}
                  symbol={"₹"}
                  price={item.current_price}
                   rank={null}/>
                </>
            ))
         }
         </Flex>
    </div>
  )
}
