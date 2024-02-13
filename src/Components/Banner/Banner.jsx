import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants.js";
import  {PlayArrow , Add }  from '@mui/icons-material'
import axios from "../../axios.js";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        // console.log(response.data.results[0]);
        setMovie(response.data.results[14]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.name : ""}</h1>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
        <div className="banner_buttons">
          <button className="button play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className='button info'>
            <Add/>
           <span>My List</span>
          </button>
        </div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
