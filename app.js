const express = require("express");
const app = express();

app.get("/login", (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    if (username == "admin" && password == "1234") {
        res.send("Welcome admin");
    } else {
        res.send("Access denied");
    }
});

app.get("/eval", (req, res) => {
    const input = req.query.input;
    const result = eval(input);
    res.send(result);
});

function calculate(price, discount) {
    var total = price - discount;

    if (total == "0") {
        console.log("zero");
    }

    return total;
}

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

app.listen(3000);