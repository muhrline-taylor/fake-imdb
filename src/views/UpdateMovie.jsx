import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import axios from 'axios';
import {navigate} from '@reach/router';

const UpdateMovie = props => {
    const [form, setForm] = useState({
        title: "",
        director: "",
        releaseDate: "",
        moviePoster: "",
        description: "",
        category: {
            Action: false,
            Adventure: false,
            Romance: false,
            Horror: false,
            Drama: false,
            Thriller: false,
            SciFi: false,
            Documentary: false
        }
    })
    const [error, setError] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/movies/${props._id}`)
            .then(res => setForm(res.data.Movies))
    },[])
    const checkboxHandler = e => {
        setForm({
            ...form,
            [e.target.name]: {...form.category, [e.target.value]:e.target.checked}
        })
    }
    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/movies/update/${props._id}`, form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                }
                else {
                    navigate("/")
                }
            })
            .catch(console.log("Something went wrong in updating the movie!"))
    }
    return(
        <>
            <h1>Update Movie</h1>
            <Form form={form} onChangeHandler={onChangeHandler} checkboxHandler={checkboxHandler} onSubmitHandler={onSubmitHandler} error={error}/>
        </>
    );
}

export default UpdateMovie;