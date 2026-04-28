function loginUser(username, password) {
    if (username == null || password == null) {
        console.log("Missing credentials");
        return false;
    }

    if (username == "admin" && password == "1234") {
        console.log("Login success");
        return true;
    } else {
        console.log("Login failed");
        return false;
    }
}

function calculateDiscount(price, userType) {
    let discount;

    if (userType == "vip") {
        discount = price * 0.2;
    }

    if (userType == "regular") {
        discount = price * 0.1;
    }

    return price - discount;
}

function unusedHelper() {
    var x = 10;
    var y = 20;
    return x + y;
}

function processData(input) {
    if (input != null) {
        if (input.value != null) {
            console.log(input.value);
        }
    }
}

loginUser("admin", "1234");
calculateDiscount(100, "vip");