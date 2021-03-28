const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

    // HANDLING POST REQUESTS
app.use(express.json(), express.urlencoded({extended: true}));

    // CONNECT TO CONFIG FILE
require("./server/config/mongoose.config")

    // CONNECT TO ROUTES AND PASS IT TO MY APP
require("./server/routes/movies.routes")(app)

app.listen(port, () => console.log(`It's time to MERN on port ${port}`))
