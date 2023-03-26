import React from 'react'
import {Card,CardHeader,Heading,CardBody,CardFooter,Image,Text} from '@chakra-ui/react'
import {Link} from "react-router-dom"


export default function CardView(props) {
  return (
    <div>
       <Link textDecoration={"none"} href={props.url}  target='blank'>
        <Card size={"sm"}
         width={"200px"} 
         align={"center"}
         mt={4} shadow={"lg"} 
         borderRadius={"lg"}
         transition={"all 0.3s"}
         css={{
            "cursor":"pointer",
           "&:hover":{
            transform:"scale(1.1)"
           }
         }}>
            <CardHeader>
               <Heading fontSize={"1rem"}>{props.title}</Heading>
            </CardHeader>
            <CardBody>
                <Image h={"10vh"} src={props.img}/>
            </CardBody>
            <CardFooter flexDirection={"column"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>{props.rank}</Text>
            {
                props.price===""?null:<Text color={"green.400"} fontSize={"1xl"} fontWeight={"bold"}>Price: {props.symbol} {props.price}</Text>}
            </CardFooter>
        </Card>
        </Link>
    </div>
  )
}
