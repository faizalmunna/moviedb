import React , { useState }  from 'react'
import { Tooltip } from 'reactstrap'
import {Link} from 'react-router-dom'
import './Single.scss'
const SingleActor = ({name, id, profile_path, known_for_department, popularity, biography}) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <>
            <Link className="movie_card" to={/actors/ + id}>
                <div  id={"Tooltip-" + id}>
                    <h5 className="movie_card_title">{name}</h5>
                   {  (profile_path) ? 
                   <img
                    className="search_image img-fluid"
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt=""
                    /> : null
                    }
                </div>
                <Tooltip id='tooltip_custom' 
                placement="auto"
                isOpen={tooltipOpen}
                target={"Tooltip-" + id}
                toggle={toggle}
                >
                    <div className='tooltip_title'>
                        <h3>{name}</h3>
                    </div>
                    <div className='tooltip_body' style={{fontSize:'12px'}}>
                        <p style={{fontSize:'10px'}}>{biography}</p> 
                        <p><strong>Known for</strong>  {known_for_department}</p>
                        <p><strong>Popularity </strong>  {popularity}</p>
                    </div>
                </Tooltip>
            </Link>
        </>
    )
}
export default  SingleActor