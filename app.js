// This is my function that adds two numbers together
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// We declare the functions with the same name example "fromEuroToDollar".
const fromDollarToYen = (Dollar) => {
    let Euros = Dollar / oneEuroIs["USD"];
    return Euros * oneEuroIs["JPY"];
}

const fromEuroToDollar = (Euros) => {
    return Euros * oneEuroIs["USD"];
}

const fromYenToPound = (Jpy) => {
    let Euros = Jpy / oneEuroIs["JPY"];
    return Euros * oneEuroIs["GBP"];
}

// Export the function for use in other files 
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound }