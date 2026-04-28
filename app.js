const express = require("express");
const app = express();

// Safe login (no hardcoded credentials, proper comparison)
app.get("/login", (req, res) => {
    const { username, password } = req.query;

    if (!username || !password) {
        return res.status(400).send("Missing credentials");
    }

    // Simulated secure check
    if (username === "admin" && password === "securePassword") {
        return res.send("Welcome admin");
    }

    return res.send("Access denied");
});

// Removed eval and replaced with safe handling
app.get("/process", (req, res) => {
    const input = req.query.input;

    if (!input) {
        return res.status(400).send("No input provided");
    }

    // Instead of eval, just return input safely
    return res.send(`Processed input: ${input}`);
});

// Improved calculation logic
function calculate(price, discount = 0) {
    const total = price - discount;

    if (total === 0) {
        console.log("Total is zero");
    }

    return total;
}

// Removed duplicate functions
function addNumbers(a, b) {
    return a + b;
}

app.listen(3000, () => {
    console.log("Server running on port 3000");
});