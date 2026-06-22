

let age = 21;
let message;
if (age >= 18) {
    message = "You are an Adult";
}
else {
    "You are a Minor";
}

console.log(message)

let message2 = age <= 18? "You are a Minor" : "You are an adult";

console.log(message2)

let time = 12;
let greeting = time >= 16? "Good Morning and how was your night?" : "Good evening and how was work";

console.log(greeting)

let isStudent = false;
let message3 = isStudent? "You are a Student" : "You are NOT a Student";

console.log(message3);

let income = 200;
let tithe = income >= 10 ? 10 : 0;

console.log(`Your tithe is $${income * (tithe/100)}`);


