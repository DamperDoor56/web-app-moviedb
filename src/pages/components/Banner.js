import React, {useEffect, useState} from 'react'
import './Banner.scss'
import axios from './axios';
import request from './Request';

function Banner() { 
  const [movie, setMovie] = useState([]);

  // Get data
  useEffect(() =>{
    async function fetchData(){
      const requests = await axios.get(request.fetchNetflix);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return requests
    }

    fetchData();
  }, []);


  //Limit text 
  function limitText(string, n){
    return string.substr(0, n) + '...' 
  }

  return (
    <header className='banner' style={{
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(180deg, rgba(37,37,37,0.6) 75%, #111 95%), url("https://image.tmdb.org./t/p/original${movie.backdrop_path}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    }}>
    <div className='banner-contents'>
        <h1 className='title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='buttons-container'>
            <button className='banner-buttons'>Play</button>
            <button className='banner-buttons'>My list</button>
        </div>
        <p className='summary'>
          {limitText(`${movie.overview}`, 250)}</p>
    </div>
    </header>
  )
}

export default Banner;