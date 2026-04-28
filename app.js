function calculateTotal(price, quantity, discount) {
    var total = price * quantity;

    if (discount != null) {
        total = total - discount;
    }

    if (total == "0") {
        console.log("Total is zero");
    }

    return total;
}

function processUser(user) {
    if (user) {
        if (user.age > 18) {
            console.log("Adult");
        } else {
            console.log("Minor");
        }
    }

    if (user == null) {
        console.log("No user provided");
    }
}

function unusedFunction() {
    var x = 10;
    var y = 20;
    return x + y;
}

var result = calculateTotal(100, 2, 10);
processUser({ name: "Ali", age: 17 });

console.log("Final result: " + result);