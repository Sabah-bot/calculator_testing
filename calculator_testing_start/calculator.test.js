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

describe('multiply', () => {

  test('can mulitply two small positive numbers',() => {
    expect(multiply(2,2)).toBe(4);
  })

  test('can mulitply two small negative numbers', () => {
    expect(multiply(-2, -2)).toBe(4);
  })

  test('can mulitply two large positive numbers', () => {
    expect(multiply(100, 33)).toBe(3300);
  })

  test('can mulitply one positive and one negative', () => {
    expect(multiply(-5, 9)).toBe(-45);
  })

});

describe('divide', () => {

  test('can divide two small positive numbers',() => {
    expect(divide(6,2)).toBe(3);
  })

  test('can divide two small negative numbers', () => {
    expect(divide(-20, -10)).toBe(2);
  })

  test('can divide two large positive numbers', () => {
    expect(divide(250, 50)).toBe(5);
  })

  test('can divide one positive and one negative', () => {
    expect(divide(-45, 9)).toBe(-5);
  })


});

describe('modulus', () => {

  test('can modulus two small positive numbers',() => {
    expect(modulus(11,2)).toBe(1);
  })

  test('can modulus two small negative numbers', () => {
    expect(modulus(-33, -10)).toBe(-3);
  })

  test('can modulus two large positive numbers', () => {
    expect(modulus(1000, 30)).toBe(10);
  })

  test('can modulus one positive and one negative', () => {
    expect(modulus(-47, 9)).toBe(-2);
  })

});

describe('even', () => {

  test('a is an even integer', () => {
    const expected = 4;
    const actual = even(4,3);
    expect(actual).toBe(expected);
  })

  test('b is an even integer', () => {
    const expected = 2;
    const actual = even(1,2);
    expect(actual).toBe(expected);
  })

  test('neither a or b is an even integer', () => {
    const expected = "There are no even numbers!";
    const actual = even(11,17);
    expect(actual).toBe(expected);
  })

  test('a and be are both even integers', () => {
    const expected = (32 && 56);
    const actual = even(32,56);
    expect(actual).toBe(expected);
  })

});

// describe('odd', () => {

// });
