const myObj = {name: "Dave"};

const anotherObj ={
    alive:true,
    answer: 42,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning: "coffee",
        afternoon: "Iced tea",
    },
    action: function () {
        return `Time to ${this.hobbies[2]}!`;
    }
}

console.log(myObj);
console.log(myObj.name);
console.log(anotherObj.alive);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies);
console.log(anotherObj.beverage);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.beverage.afternoon);


console.log(anotherObj.hobbies[0]);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj.hobbies[2]);


console.log(anotherObj.beverage["morning"]);
console.log(anotherObj.beverage["afternoon"]);

