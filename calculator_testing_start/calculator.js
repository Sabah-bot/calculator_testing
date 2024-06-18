const sum = function(a, b){
    return a + b;
};

const subtract = function(num1, num2){
    return num2 - num1;
};

const multiply = function(num1, num2){
    return num1 * num2;
};

const divide = function(num1,num2){
    return num1 / num2;
};

const modulus = function (num1, num2){
    return num1 % num2;
};

const even = function(number){
    return number % 2 === 0;
  };
  
const odd = function(number){
    return number % 2 !== 0;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
