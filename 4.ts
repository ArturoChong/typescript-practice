const readline: any = require('readline-sync');

let number: number = readline.question('Number: ');

function get_divisors(number: number): number[] {
    let divisors: number[] = [];

    for ( let i = 1; i < 30; i++ ) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
};

let divisors: number[] = get_divisors(number);

console.log(divisors);