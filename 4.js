var readline = require('readline-sync');
var number = readline.question('Number: ');
function get_divisors(number) {
    var divisors = [];
    for (var i = 1; i < 30; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}
;
var divisors = get_divisors(number);
console.log(divisors);
