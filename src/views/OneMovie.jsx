import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FullMovie from '../components/FullMovie';

const OneMovie = props => {
    const [thisMovie, setThisMovie] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/movies/${props._id}`)
            .then(res => setThisMovie(res.data.Movies))
    }, [])
    return(
        <>
            {
                thisMovie ?
                <FullMovie movie={thisMovie}/>:""
            }
        </>
    );
}

export default OneMovie;