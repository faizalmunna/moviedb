import React, { useState }  from 'react'
import { Tooltip } from 'reactstrap'
import {Link} from 'react-router-dom'
import './Single.scss'
const SingleMovie = ({ poster_path, title, id, overview, original_title, release_date, vote_average}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const toggle = () => setTooltipOpen(!tooltipOpen)
  let year = release_date && release_date.slice(0, 4)
  return (
    <>
    <Link className="movie_card" to={/movie/ + id}>
      <div  id={"Tooltip-" + id}>
        <h5 className="movie_card_title">{title}</h5>
        <img
          className="search_image img-fluid"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
        />
      </div>
      <Tooltip id='tooltip_custom' 
        placement="auto"
        isOpen={tooltipOpen}
        target={"Tooltip-" + id}
        toggle={toggle}
      >
        <div className='tooltip_title'>
          <h3>{original_title} <span className='tooltip_year'>{year}</span></h3>
          <span><span className='tooltip_imdb'><strong>IMDB </strong></span>{ vote_average}</span>
        </div>
       <div className='tooltip_body'>
       <p style={{fontSize:'10px'}}>{overview}</p> 
       </div>
       <div className='tooltip_footer'>
       <i class="fas fa-play-circle"></i> Watch NOW
       </div>
      </Tooltip>
    </Link>
      
    </>
  );
};
export default SingleMovie;
