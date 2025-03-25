function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve("Success");
        } else if (num < 0) {
            reject("Failure");
        } else {
            reject("Number is zero, not positive or negative");
        }
    });
}

// Example usage:
checkNumber(5)
    .then(result => console.log(result))  // Success
    .catch(error => console.log(error));

checkNumber(-3)
    .then(result => console.log(result))
    .catch(error => console.log(error));  // Failure

checkNumber(0)
    .then(result => console.log(result))
    .catch(error => console.log(error));  // Number is zero, not positive or negative