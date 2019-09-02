const readline: any = require('readline-sync');

let numbers: number[] = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

let less_than_five: number[] = numbers.filter((number: number) => number < 5);

const less_than_n = (n: number, numbers: number[]) => {
    return numbers.filter((number: number) => number < n);
}

let n: number = readline.question('Number less than: ');
console.log(less_than_n(n, numbers));