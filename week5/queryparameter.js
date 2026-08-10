const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {
    res.send("User ID: " + req.params.id);
});

app.get("/student/:name/:roll", (req, res) => {
    res.send(
        "Name: " + req.params.name +
        ", Roll No: " + req.params.roll
    );
});

app.listen(3000, () => {
    console.log("Server running");
});