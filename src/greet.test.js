const greet = require('./greet.js');

test('Can greet anyone', () => {
  expect(greet('Ophelia')).toBe("Hi, Ophelia!");
});
