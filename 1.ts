const readline: any = require('readline-sync');

let user_name = readline.question('Name: ');
let age = Number(readline.question('Age: '));
let times: number = Number(readline.question('How many times do you want to repeat the message: '));

const get_age_100 = (age: number) => {
    let current_year: number = new Date().getFullYear();
    let year_at_100: number = 100 - age;

    return current_year + year_at_100;
};

let message: string = `${user_name}, you will be a hundred years old in ${get_age_100(age)}`;

for (let i = 0; i < times; i++) {
    console.log(message);
}