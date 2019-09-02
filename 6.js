var readline = require('readline-sync');
var word = readline.question('Word: ');
function reverse_string(my_string) {
    return my_string.split('').reverse().join('');
}
function determine_if_is_palindrome(my_string, reverse) {
    return my_string === reverse ? true : false;
}
var reversed = reverse_string(word);
var is_palindrome = determine_if_is_palindrome(word, reversed);
var result = '';
if (is_palindrome) {
    result = 'palindrome.';
}
else {
    result = 'not palindrome.';
}
var message = word + " is " + result;
console.log(message);
