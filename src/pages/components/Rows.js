import axios from './axios';
import React, {useEffect, useState} from 'react'
import './Rows.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";



function Rows({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    
    //Images url
    const baseURL = 'https://image.tmdb.org./t/p/original'
    const otherURL = 'https://image.tmdb.org/t/p/w500'
    

    //Fetch Image data
    useEffect(() =>{
        async function fetchData(){
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results);
            return requests;
        }
        fetchData();
    }, [fetchUrl])

  return (
    
    <div className='row'>
        <h3>{title}</h3>
        <Swiper
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
         breakpoints={{
            200:{
                slidesPerView: 1,
            },
            360:{
                slidesPerView: 1.3,
            },
            500:{
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 2.2,
            },
            700:{
              slidesPerView: 2.6,
            },
            800:{
              slidesPerView: 3,
            },
            1097:{
                slidesPerView: 4.88,
            }, 
          }}
         >
        {movies.map(movie => (
            <SwiperSlide>
            <img className={`row-poster ${isLargeRow && "row-poster-large"}`} key={movie.id}
            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}` || `${otherURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} /></SwiperSlide>
        ))}
    </Swiper>
    </div>

  )
}

export default Rows