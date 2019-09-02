'use strict';

const readline: any = require('readline-sync');

let my_number: number = readline.question('Number: ');
let my_number_2: number = readline.question('Number 2: ');

const is_odd = (my_number: number) => {
    return my_number % 2 === 0 ? false : true;
};

const is_divisible = (my_number: number, my_number_2: number) => {
    return my_number % my_number_2 === 0 ? true : false;
};

const is_multiple_of_four = (number: number) => number % 4 === 0 ? true : false;

const return_message = (is_odd: boolean, my_number: number) => {
    let result: string = '';

    if (is_odd) {
        result = 'odd';
    }

    else {
        result = 'even';
    }

    let multiple_of_four: boolean = is_multiple_of_four(my_number);

    let message: string = `${my_number} is ${result}`;

    if (multiple_of_four) {
        message += ' and it is also a multiple of four.';
    }

    return message;
}

const check_for_divisibility = (my_number: number, my_number_2: number) => {
    let result: string = '';

    let divisible: boolean = is_divisible(my_number, my_number_2);

    if (divisible) {
        result = 'divisible';
    }
    else {
        result = 'not divisible';
    }

    let message: string = `${my_number} is ${result} by ${my_number_2}.`;

    return message;
}

console.log(check_for_divisibility(my_number, my_number_2));