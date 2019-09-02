'use strict';
var readline = require('readline-sync');
var my_number = readline.question('Number: ');
var my_number_2 = readline.question('Number 2: ');
var is_odd = function (my_number) {
    return my_number % 2 === 0 ? false : true;
};
var is_divisible = function (my_number, my_number_2) {
    return my_number % my_number_2 === 0 ? true : false;
};
var is_multiple_of_four = function (number) { return number % 4 === 0 ? true : false; };
var return_message = function (is_odd, my_number) {
    var result = '';
    if (is_odd) {
        result = 'odd';
    }
    else {
        result = 'even';
    }
    var multiple_of_four = is_multiple_of_four(my_number);
    var message = my_number + " is " + result;
    if (multiple_of_four) {
        message += ' and it is also a multiple of four.';
    }
    return message;
};
var check_for_divisibility = function (my_number, my_number_2) {
    var result = '';
    var divisible = is_divisible(my_number, my_number_2);
    if (divisible) {
        result = 'divisible';
    }
    else {
        result = 'not divisible';
    }
    var message = my_number + " is " + result + " by " + my_number_2 + ".";
    return message;
};
console.log(check_for_divisibility(my_number, my_number_2));
