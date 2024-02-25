import React from 'react'
import Axios, { formToJSON } from 'axios'
import { API_KEY, imgUrl } from './API'
import "./App.css"


function Comedy() 
{
    const[originalsData, setOriginalsData]=React.useState([])

    React.useEffect( function () 
    {
        Axios.get(` https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`)
        .then(function(output)
        {
            setOriginalsData(output.data.results)
        })                                            
        .catch(function(error)
        {
            console.log(error)
        })

    },[])

     return (
    <div>
        <h2 style={{color:'white'}}>Popular on Netflix</h2>
        <div className='allImages'>
      {
        originalsData.map(function(info){
            return <img width="250px" height="250px" src={imgUrl+info.poster_path}/>
        })
      }
    </div>
    </div>
  )
    }

    export default Comedy