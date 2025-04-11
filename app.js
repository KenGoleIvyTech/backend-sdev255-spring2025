// setup
const express = require("express");
var cors = require("cors");
// activate or tell this app variable to be an express server
const app = express();
// We have to use cors in order to host a frontend and backend on the same device
app.use(cors());
const router = express.Router();
const port = 3000;

// Making an API using routes
// Routes are used to handle browser requests. They look like URLs.
// The difference is that when a browser requests a route, it's dynamically handled using a function.
// When using a function on a route, we almost always have parameters for response and request.

router.get("/songs", (req,res) => { 
    const songs = [
        {
            title: "We Found Love",
            artist: "Rihanna",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["electro house"]
        },
        {
            title: "Happy",
            artist: "Pharrell Williams",
            popularity: 10,
            releaseDate: new Date(2013, 11, 21),
            genre: ["soul", "new soul"]
        }
    ]
    res.json(songs);
});

// All requests that usually use an api start with /api, so the url would be localhost:3000/api/songs
app.use("/api", router);
app.listen(port, () => {
    console.log("Listening on port " + port);
});