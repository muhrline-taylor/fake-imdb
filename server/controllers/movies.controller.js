const Movies = require("../models/movies.model");

module.exports.findAllMovies = (req, res) => {
    // Get all jokes and return them as JSON
    Movies.find()
        .then(allMovies => res.json({movies: allMovies}))
        .catch(err => res.json({message: "Oh no! Something went wrong while getting all jokes!", error: err}))
}

// FIND ONE
module.exports.findOneMovie = (req, res) => {
    Movies.findOne({_id: req.params._id})
        .then(oneMovie => res.json({Movies: oneMovie}))
        .catch(err => res.json({message: "Something went wrong grabbing the movie!", error: err}))
}

// CREATE ONE
module.exports.createOne = (req, res) => {
    Movies.create(req.body)
        .then(addMovie => res.json({Movies: addMovie}))
        .catch(err => res.json({message: "Something went wrong creating the movie!", error: err}))
}

// UPDATE ONE
module.exports.updateOneMovie = (req, res) => {
    Movies.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneMovie => res.json({Movies: oneMovie}))
        .catch(err => res.json({message: "Something went wrong updating the movie!", error: err}))
}

// DELETE ONE
module.exports.deleteOneMovie = (req, res) => {
    Movies.deleteOne()
        .then(res.json({message: "Movie deleted!"}))
        .catch(err => res.json({message: "Something went wrong deleting the movie!", error: err}))
}
    
