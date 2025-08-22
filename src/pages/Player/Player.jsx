import React, { useEffect, useState } from 'react'
import './Player.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] =useState ({
    name: "",
    key: "",
    published_at: "",
    type:""
  })
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmFhMjhlN2ZjODJhM2FkYWM4OGRmOGFmMzkwODY1YSIsIm5iZiI6MTc1NTUyMjI5NC40MzcsInN1YiI6IjY4YTMyNGY2NmRiZGY5ZDc4Mzg3MDQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cs2hc_-fH3TN6pCgZBEOgv0vXozlHQl2agjoPnqJfxk'
  }
};

useEffect (()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?
   language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
  }, []);
  return (
    <div className='player'>
      <div className='player-img' onClick={()=>{navigate(-2)}}>
      <IoMdArrowRoundBack /> </div>
      <iframe width='90%' height='90%'
       src={`https://www.youtube.com/embed/${apiData.key}`}
       title='trailer' frameborder='0' allowFullScreen></iframe>
       <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player
