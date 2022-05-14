import React,{useEffect, useState}from "react";
import axios from "axios";
import { API_ENDPOINTS } from '../../utils/constants';
const Episodes = ()=>{
    const [episodes,setEpisodes] = useState([]);

    
     const getEpisodes = async()=>{
        let response = await axios.get(API_ENDPOINTS.episodes)
        
        setEpisodes(response.data.results)

     };
  useEffect(()=>{
    getEpisodes()
  },[])
    
   
    return(
        <div>
            {episodes&& episodes.map((epi, i)=> <li key={i}>Episode :{epi.name}<p>Date: {epi.air_date}</p></li>)}
        </div>
    )
};

export default Episodes;