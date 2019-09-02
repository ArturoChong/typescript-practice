var readline = require('readline-sync');
var numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
var less_than_five = numbers.filter(function (number) { return number < 5; });
var less_than_n = function (n, numbers) {
    return numbers.filter(function (number) { return number < n; });
};
var n = readline.question('Number less than: ');
console.log(less_than_n(n, numbers));
