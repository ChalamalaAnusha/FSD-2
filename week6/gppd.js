const express = require("express");
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Rekha" },
    { id: 2, name: "Anu" }
];

// GET
app.get("/users", (req, res) => {
    res.json(users);
});

// POST
app.post("/users", (req, res) => {
    users.push(req.body);
    res.json({ message: "User added", user: req.body });
});

// PUT
app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);

    if (!user)
        return res.status(404).send("User not found");

    user.name = req.body.name;
    res.json(user);
});

// DELETE
app.delete("/users/:id", (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "User deleted" });
});

app.listen(3000, () => {
    console.log("Server running");
});