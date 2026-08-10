const express = require("express");
const app = express();

let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 }
];

// Get all products
app.get("/products", (req, res) => {
    res.json(products);
});

// Get one product using dynamic URL
app.get("/products/:id", (req, res) => {
    const product = products.find(
        p => p.id == req.params.id
    );

    if (!product)
        return res.status(404).json({ message: "Not found" });

    res.json(product);
});

// Delete product
app.delete("/products/:id", (req, res) => {
    products = products.filter(
        p => p.id != req.params.id
    );

    res.json({ message: "Product deleted" });
});

app.listen(3000, () => {
    console.log("Server running");
});