
    // MODEL FILE
    const mongoose = require("mongoose");

    const Schema = mongoose.Schema;
    
    const MoviesSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, "Movie must have a title!"],
            minlength: [3, "Movie title must be at least 3 characters!"]
        },
        director: {
            type: String,
            required: [true, "Movie must have a director!"],
            minlength: [3, "Director must be at least 3 characters"]
        },
        releaseDate: {
            type: String,
            required: [true, "Movie must have a release date!"]
        },
        description: {
            type: String,
            required: [true, "Movie must have a description!"]
        },
        moviePoster: {
            type: String,
            required: [true, "Movie must have a poster!"]
        },
        category: {
            type: Object
        }
    }, {timestamps: true})

    const Movies = mongoose.model("Movies", MoviesSchema);

module.exports = Movies;