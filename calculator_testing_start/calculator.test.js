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

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expect(subtract(3, 7)).toBe(4);
  })

  test('can subtract two small negative numbers', () => {
    expect(subtract(-1, -3)).toBe(-2);
  })

  test('can subtract two large positive numbers', () => {
    expect(subtract(300, 430)).toBe(130);
  })

  test('can subtract one positive and one negative', () => {
    expect(subtract(-5, 9)).toBe(14);
  })

});

// describe('multiply', () => {

// });

// describe('divide', () => {

// });

// describe('modulus', () => {

// });

// describe('even', () => {

// });

// describe('odd', () => {

// });
