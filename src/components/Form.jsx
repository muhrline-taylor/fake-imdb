import React from 'react';

const Form = props => {
    if(props.error){
        console.log(props.error)
    }
    return(
        <div className="row">
            <div className="col-sm-8">
                <form onSubmit={props.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" className="form-control" onChange={props.onChangeHandler} value={props.form.title}/>
                        {
                            props.error.title ?
                            <span className="text-danger">{props.error.title.message}</span>:""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="director">Director</label>
                        <input type="text" name="director" className="form-control" onChange={props.onChangeHandler} value={props.form.director}/>
                        {
                            props.error.director ?
                            <span className="text-danger">{props.error.director.message}</span>:""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="releaseDate">Release Date</label>
                        <input type="date" name="releaseDate" className="form-control" onChange={props.onChangeHandler} value={props.form.releaseDate.substring(0,10)}/>
                        {
                            props.error.releaseDate ?
                            <span className="text-danger">{props.error.releaseDate.message}</span>:""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="moviePoster">Movie Poster</label>
                        <input type="text" name="moviePoster" className="form-control" onChange={props.onChangeHandler} value={props.form.moviePoster}/>
                        {
                            props.error.moviePoster ?
                            <span className="text-danger">{props.error.moviePoster.message}</span>:""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" className="form-control" onChange={props.onChangeHandler} value={props.form.description}/>
                        {
                            props.error.description ?
                            <span className="text-danger">{props.error.description.message}</span>:""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Categories</label>
                        <p><input type="checkbox" name="category" value="Action" checked={props.form.category.Action} onChange={props.checkboxHandler}/>Action</p>
                        <p><input type="checkbox" name="category" value="Adventure" checked={props.form.category.Adventure} onChange={props.checkboxHandler}/>Adventure</p>
                        <p><input type="checkbox" name="category" value="Romance" checked={props.form.category.Romance} onChange={props.checkboxHandler}/>Romance</p>
                        <p><input type="checkbox" name="category" value="Horror" checked={props.form.category.Horror} onChange={props.checkboxHandler}/>Horror</p>
                        <p><input type="checkbox" name="category" value="Thriller" checked={props.form.category.Thriller} onChange={props.checkboxHandler}/>Thriller</p>
                        <p><input type="checkbox" name="category" value="SciFi" checked={props.form.category.SciFi} onChange={props.checkboxHandler}/>SciFi</p>
                        <p><input type="checkbox" name="category" value="Documentary" checked={props.form.category.Documentary} onChange={props.checkboxHandler}/>Documentary</p>
                    </div>
                    <input type="submit" value="Create!" className="btn btn-primary"/>
                </form>
            </div>
        </div>
    );
}

export default Form;