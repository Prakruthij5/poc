import React,{useMemo, useEffect, useState} from 'react';
import { Table } from "../table/Table";
import {COLUMNS} from '../table/columns';
import axios from 'axios';
import { useSelector } from 'react-redux';

const TicketDetails = () => {
    const [ticketData,setTicketData]=useState([]);
    let columns=useMemo(() => COLUMNS, []);
    let mockData = useSelector((state)=>state.dataFromApi).dataFromApi;
    // let data= useMemo(()=> mockData,[]);
    // if (useSelector((state)=>state.dataFromApi).ticketImported === true) {
    //     mockData = useSelector((state)=>state.dataFromApi).dataFromApi;
    // }
    console.log(useSelector((state)=>state.dataFromApi).ticketImported, mockData)
    //isDataImported = useSelector((state)=>state.dataFromApi).ticketImported;
    const getData=async()=>{
    
        // await axios.get("https://6409bc8e6ecd4f9e18b9913a.mockapi.io/Tickceting" , {
        //     "headers": {
        //         'Content-Type': 'application/json', 
        //     }
        // }).then(function(response){
        //             if(response.status==200){
        //                 setTicketData(response.data)
        //             }
        //         }
        //     )
    }
    // useEffect(()=>{
    //     // getData();
    //      console.log("ticketData")
    // },[mockData])
    return (
            <div>
                <div className='contentbox'>
          <div className="dashboard">
               
                <Table columns={columns} data={mockData}/>
    
            
            </div>
             
        </div>
            </div>
        );
}

export default TicketDetails;