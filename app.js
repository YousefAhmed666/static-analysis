const express = require("express");
const app = express();

// Use environment variables instead of hardcoded credentials
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

app.get("/login", (req, res) => {
    const { username, password } = req.query;

    if (!username || !password) {
        return res.status(400).send("Missing credentials");
    }

    // Safe comparison (no hardcoded secrets)
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        return res.send("Welcome admin");
    }

    return res.send("Access denied");
});

// Safe endpoint without risky operations
app.get("/process", (req, res) => {
    const { input } = req.query;

    if (typeof input !== "string") {
        return res.status(400).send("Invalid input");
    }

    // Just return sanitized input (no eval, no execution)
    return res.send(`Processed input: ${input.trim()}`);
});

// Clean function
function calculate(price, discount = 0) {
    if (typeof price !== "number" || typeof discount !== "number") {
        throw new Error("Invalid arguments");
    }

    const total = price - discount;

    if (total === 0) {
        console.log("Total is zero");
    }

    return total;
}

// Clean helper
function addNumbers(a, b) {
    return a + b;
}

app.listen(3000, () => {
    console.log("Server running on port 3000");
});