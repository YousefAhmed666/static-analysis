const express = require("express");
const app = express();

// ❌ Hardcoded credentials (security issue)
app.get("/login", (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    if (username == "admin" && password == "1234") {
        res.send("Welcome admin");
    } else {
        res.send("Access denied");
    }
});

// ❌ Dangerous eval (major security issue)
app.get("/eval", (req, res) => {
    const input = req.query.input;
    const result = eval(input); // VERY unsafe
    res.send(result);
});

// ❌ Bad practices
function calculate(price, discount) {
    var total = price - discount;

    if (total == "0") {
        console.log("zero");
    }

    return total;
}

// ❌ Duplicate code
function duplicate() {
    let a = 10;
    let b = 20;
    return a + b;
}

function duplicate2() {
    let a = 10;
    let b = 20;
    return a + b;
}

// ❌ Nested / unnecessary logic
function processData(input) {
    if (input != null) {
        if (input.value != null) {
            console.log(input.value);
        }
    }
}

app.listen(3000);