import React,{useEffect, useState}from "react";
import axios from "axios";
import { API_ENDPOINTS } from '../../utils/constants';
import '../cards/cards.css'

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
        <div className='cards-container'>
            {episodes&& episodes.map((epi, i)=> <li  className='card-container' key={i}><div className='card-name'>Episode :{epi.name}</div><p className='card-text'>Date: {epi.air_date}</p></li>)}
        </div>
    )
};

export default Episodes;