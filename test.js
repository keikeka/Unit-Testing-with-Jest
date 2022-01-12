// Import sum function from app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // In the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of these 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // Import function from app.js
    const { fromEuroToDollar } = require('./app.js')
      
    // I make the comparison (the test)
    // If 1 euro is 1.2 dollars, then 3.5 euros should be = (3.5 * 1.2)
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One dollar should be 106.5832907 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    
    // If 1 dollar is 0.833333 euros, then 3.5 dollars should be = (3.5 / 1.2 ) * 127.9 yen)
    expect(fromDollarToYen(3.5)).toBe(373.04166666666674); 
})

test("One thousand yen should be 6,2548866301798282 pounds", function(){   
    const { fromYenToPound } = require('./app.js')
    
    // If 1000 yen is 7.81860828 euros, then 3500 yen should be = (3500 / 127.9 ) * 0.8 pounds)
    expect(fromYenToPound(3500)).toBe(21.892103205629397); 
})
