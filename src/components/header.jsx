import React from 'react'
import {Button,
  Text,
  IconButton,
  Spacer,
  useColorMode,
  Flex,
useMediaQuery} from "@chakra-ui/react"
import {FaMoon,FaSun} from "react-icons/fa"
import {Link} from "react-router-dom"

export default function Header() {
    const {colorMode,toggleColorMode}=useColorMode();
    const isdark=colorMode==="dark";
    const [isNotSmallerScreen]=useMediaQuery('(min-width: 600px)');
  return (
    <div>
        <Flex flexDirection={"row"} justify={"center"} align={"center"}>
            <Text ml={2} fontSize={isNotSmallerScreen?"4xl":"1xl"}>Bitcoin</Text>
            <Spacer/>
            <Link to={"/exchange"}><Button variant="unstyled" style={{marginLeft:"20px"}}>Convert into INR</Button></Link>
            <Link to={"/graph"}><Button variant="unstyled" style={{marginLeft:"20px"}}>Graphical View</Button></Link>
            <IconButton style={{marginLeft:"20px"}}
             variant="unstyled" icon={isdark?<FaSun/>:<FaMoon/>}
             onClick={toggleColorMode}/>
        </Flex>
    </div>
  )
}
