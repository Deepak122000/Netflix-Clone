import React from 'react'
import Axios, { formToJSON } from 'axios'
import { API_KEY, imgUrl } from './API'
import "./App.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

function NetflixOriginal() 
{
    const[originalsData, setOriginalsData]=React.useState([])
    const[myId, setMyId] =React.useState("")

    React.useEffect( function () 
    {
        Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
        .then(function(output)
        {
            setOriginalsData(output.data.results)
        })
        .catch(function(error)
        {
            console.log(error)
        })

    },[])

    function handleClick (movieData){
        const movieName = movieData.title

        movieTrailer(movieName)
        .then((output)=>{
           setMyId( new URLSearchParams(new URL(output).search).get("v"))
        })
        .catch((error)=>{
console.log(error);
        })
    }
     return (
    <div>
        <h2 style={{color:'white'}}>Netflix Originals</h2>
        <div className='allImages'>
      {
        originalsData.map(function(info){
            return <img width="250px" height="250px" src={imgUrl+info.poster_path} onClick={()=>handleClick(info)}/>
        })
      }
    </div>
   {myId ? <Youtube videoId={myId}/> :null}
    </div>


  )
    }

    export default NetflixOriginal