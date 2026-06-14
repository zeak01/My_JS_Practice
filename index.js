sayHi();
sayHello();
greet();

function sayHi() {
    setTimeout(function() {
        console.log("Hi!");
    }, 3000);
}

function sayHello() {
    setTimeout(function() {
    console.log("Hello!"); 
    }, 3000);
}

function sayHi() {
    setTimeout(function() {
    console.log("Hi" + " " + "Friend,");
    }, 1000);
}

function sayHello() {
    setTimeout(function() {
        console.log("Hello" + " " + "Oluwaseun," + " " + "How are you doing today?");
    }, 2000);
}

function greet() {
    setTimeout(function() {
console.log("It is nice meeting you today. Am glad that you went to church and that you came back safely.")
}, 5000);
}