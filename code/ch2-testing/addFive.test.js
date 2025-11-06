const addFive = require('./addFive');

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
})

// To run, make sure package.json has "test": "jest" and then run "npm test" in the terminal.
