import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
    const [movie , setMovie] = useState(null)
    
    const {id} = useParams();

    async function loadMovie(){
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2d65b06dcf682524c5198a666426664c`)
        
        console.log(movie);
        setMovie(data)
    }

    useEffect(()=>{
        loadMovie()
    },[id])
    return (
    <div>
      <h1>movi Page {id}</h1>
    </div>
  );
}

export default Movie;
