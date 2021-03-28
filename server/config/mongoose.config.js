const mongoose = require("mongoose");

// THE jokes_db IN THIS LINK IS THE NAME OF DATABASE TO USE
mongoose.connect("mongodb://localhost/jokes_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I found the mongoose!"))
    .catch(() => console.log("Mongoose not found!"))