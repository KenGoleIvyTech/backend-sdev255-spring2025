// setup
const express = require("express");
// activate or tell this app variable to be an express server
const app = express();
const port = 3000;

// start the web server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Making an API using routes
// Routes are used to handle browser requests. They look like URLs.
// The difference is that when a browser requests a route, it's dynamically handled using a function.
// When using a function on a route, we almost always have parameters for response and request.

// GET, or a response when someone goes to http://localhost:3000/hello
app.get("/hello", (req,res) => {
    res.send("<h1>Hello from Express!</h1>");
});

// GET, or a response when someone goes to http://localhost:3000/hello
app.get("/goodbye", (req,res) => {
    res.send("<h1>Goodbye from Express :-(</h1>");
});

app.get("/lunch", (req,res) => {
    res.send("<p>Let's go eat lunch, I'm <strong>starving!</strong></p>");
});