import React from 'react';

const FullMovie = props => {
    console.log(props.movie.moviePoster)
    return(
        <>
        <div style={{width: "50%", display: "inline-block"}}>
            <img style={{maxWidth: "250px"}} src={props.movie.moviePoster} alt="moviePoster"/>
        </div>
        <div style={{width: "50%", display: "inline-block"}}>
            <h1>{props.movie.title} ({props.movie.releaseDate.substring(0,4)})</h1>
            <h3>{props.movie.director}</h3>
            <p>Genre: </p>
            {
                Object.entries(props.movie.category).map((item, k) => {
                    return(
                        <>
                            {
                                item[1] == true ?
                                <span><em>{item[0]}&nbsp;</em></span>:""
                            }
                        </>
                    )
                })
            }
            <button className="btn btn-primary">Edit</button>
        </div>
        </>
    );
}

export default FullMovie;