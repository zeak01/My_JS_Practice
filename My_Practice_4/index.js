const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob")},
    eat: () =>{console.log("I am eating Meatpie and a bottle of Coke")},
}

const person2 = {
    firstName: "Patrick",
    lastName:  "Star",
    age: 42,
    isEmployed: false,
    sayHello: () =>{console.log("Hey! I am patrick, how are you doing?")},
    eat: () => {console.log("I am eating Semo and Ogbono soup")},
}



console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello()
person2.sayHello()


person1.eat()
person2.eat()
