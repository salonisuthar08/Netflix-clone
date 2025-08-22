
import React, { useEffect, useRef, useState } from 'react';
import  './Title.css'
import card_data from '../../assets/cards/card_data'
import { Link } from 'react-router-dom';


const Title = ({title, category}) => {
  const [apiData, setApiData] =useState ([]);
  const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmFhMjhlN2ZjODJhM2FkYWM4OGRmOGFmMzkwODY1YSIsIm5iZiI6MTc1NTUyMjI5NC40MzcsInN1YiI6IjY4YTMyNGY2NmRiZGY5ZDc4Mzg3MDQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cs2hc_-fH3TN6pCgZBEOgv0vXozlHQl2agjoPnqJfxk'
  }
};



const scroll = (direction) => {
    const { current } = cardsRef;
    const scrollAmount = 300; // how far to move each click
    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  useEffect (()=>{
   
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  }, []);

  return (
    <div className='title'>
      <h2> {title?title: "Popular on Netflix"}</h2>
       <button className="scroll-btn left" onClick={() => scroll('left')}>
          &#8249; {/* Left arrow */}
        </button>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`}  className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        } )}
         <button className="scroll-btn right" onClick={() => scroll('right')}>
          &#8250;
        </button>
      </div>
    </div>
  )
}

export default Title
