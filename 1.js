var readline = require('readline-sync');
var user_name = readline.question('Name: ');
var age = Number(readline.question('Age: '));
var times = Number(readline.question('How many times do you want to repeat the message: '));
var get_age_100 = function (age) {
    var current_year = new Date().getFullYear();
    var year_at_100 = 100 - age;
    return current_year + year_at_100;
};
var message = user_name + ", you will be a hundred years old in " + get_age_100(age);
for (var i = 0; i < times; i++) {
    console.log(message);
}
