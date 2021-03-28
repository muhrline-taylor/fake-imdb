const MoviesController = require("../controllers/movies.controller")

module.exports = app => {
    //Route that gets all Jokes
    app.get("/api/movies", MoviesController.findAllMovies)
    // GET ONE
    app.get("/api/movies/:_id", MoviesController.findOneMovie)
    // CREATE ONE
    app.post("/api/movies/new", MoviesController.createOne)
    // UPDATE ONE
    app.put("/api/movies/update/:_id", MoviesController.updateOneMovie)
    // DELETE ONE
    app.delete("/api/movies/delete/:_id", MoviesController.deleteOneMovie)
}