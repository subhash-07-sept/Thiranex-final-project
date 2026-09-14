const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Thiranex Full Stack Project is running!");
});

app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 45000,
            category: "Electronics"
        },
        {
            id: 2,
            name: "Headphones",
            price: 2000,
            category: "Electronics"
        },
        {
            id: 3,
            name: "Smart Watch",
            price: 3500,
            category: "Accessories"
        }
    ];

    res.json(products);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});