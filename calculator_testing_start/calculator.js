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

const even = function(a, b){
    if(a % 2 == 0){
        return a;
    } else if ( b % 2 == 0){
        return b;
    } else if (a % 2 == 0 && b % 2 ==0){
        return a && b;
    } else {
        return "There are no even numbers!"
    }
};

const odd = null;

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
