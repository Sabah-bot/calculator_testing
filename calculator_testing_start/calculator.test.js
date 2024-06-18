const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expect (sum(156, 241)).toBe(397);
  });

  test('can add two negative numbers', () => {
    expect (sum(-11,-9)).toBe(-20);
  });

  test('can add zero', () => {
    expect (sum(5,0)).toBe(5);

  });

// });

// describe('subtract', () => {

// });

// describe('multiply', () => {

// });

// describe('divide', () => {

// });

// describe('modulus', () => {

// });

// describe('even', () => {

// });

// describe('odd', () => {

});
