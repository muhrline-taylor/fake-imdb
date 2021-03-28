import Form from "../components/Form";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";

const AddMovie = props => {
    const [form, setForm] = useState({
        title: "",
        director: "",
        releaseDate: "",
        moviePoster: "",
        description:"",
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

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const checkboxHandler = e => {
        setForm({
            ...form,
            [e.target.name]: {...form.category, [e.target.value]: e.target.checked}
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(form)
        axios.post("http://localhost:8000/api/movies/new", form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                }
                else {
                    navigate("/")
                }
            })
            .catch(console.log("Something went wrong creating the movie!"))
    }

    return(
        <>
            <Form form={form} onChangeHandler={onChangeHandler} checkboxHandler={checkboxHandler} onSubmitHandler={onSubmitHandler} error={error}/>
        </>
    );
}

export default AddMovie;