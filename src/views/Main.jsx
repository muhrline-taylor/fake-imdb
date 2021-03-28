import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Main = props => {
    const [movies, setMovies] = useState(null);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/movies/")
            .then(res => setMovies(res.data))
    }, [update])
    const removeMovie = _id => {
        console.log(_id)
        axios.delete(`http://localhost:8000/api/movies/delete/${_id}`)
            .then(setUpdate(!update))
            .catch(err => console.log(err))
    }
    return(
        <>
            {
                movies ?
                movies.movies.map((item, k) => {
                    return <MovieCard movie={item} removeMovie={removeMovie}/>
                }):""
                
            }
            
        </>
    );
}

export default Main;