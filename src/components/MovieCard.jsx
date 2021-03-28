import { Link } from '@reach/router';
import React from 'react';

const MovieCard = props => {
    return(
        <div className="card" style={{width: "350px", display: "inline-block"}}>
            <div className="card-body">
                <img className="card-img-top" src={props.movie.moviePoster} style={{maxHeight: "250px"}}/>
                <Link to={`/movies/${props.movie._id}`}><h5>{props.movie.title}</h5></Link>
                <h6>{props.movie.releaseDate.substring(0,4)}</h6>
                <p>{props.movie.description}</p>
                <button onClick={() => props.removeMovie(props.movie._id)} className="btn btn-danger">Remove</button>
            </div>
        </div>
    );
}

export default MovieCard;