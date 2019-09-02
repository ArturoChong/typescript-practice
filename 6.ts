const readline: any = require('readline-sync');

let word: string = readline.question('Word: ');

function reverse_string(my_string: string): string {
    return my_string.split('').reverse().join('');
}

function determine_if_is_palindrome(my_string: string, reverse: string): boolean {
    return my_string === reverse ? true : false;
}

let reversed: string = reverse_string(word);
let is_palindrome: boolean = determine_if_is_palindrome(word, reversed);
let result: string = '';

if (is_palindrome) {
    result = 'palindrome.';
}
else {
    result = 'not palindrome.'
}

let message: string = `${word} is ${result}`;

console.log(message);