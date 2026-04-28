function calculateTotal(price, quantity, discount = 0) {
    let total = price * quantity;

    total -= discount;

    if (total === 0) {
        console.log("Total is zero");
    }

    return total;
}

function processUser(user) {
    if (!user) {
        console.log("No user provided");
        return;
    }

    if (user.age > 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    }
}

function calculateSum(x, y) {
    return x + y;
}

const result = calculateTotal(100, 2, 10);

processUser({ name: "Ali", age: 17 });

console.log("Final result:", result);