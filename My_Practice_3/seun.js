const vehicle = {
    wheels: 4,
    body: "Gray",
    engine: function() {
        return "Vroom Vrooooommm Vroom";
    }
    
} 


const truck = Object.create(vehicle);
truck.doors = 2;

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
    return "Wwwwhhoooooshhh!";
}

console.log(vehicle.wheels); // Output: 4
console.log(vehicle.engine()); // Output: Vroom Vroom

console.log(truck);
console.log(truck.wheels); // Output: 4
console.log(truck.engine()); // Output: Vroom Vroom

console.log(car.engine()); // Output: Wwwwhhoooooshhh!

console.log(vehicle.body); // Output: Uncaught ReferenceError: body is not defined

//THIS IS INHERITANCE OF OBJECT IN ACTION

const tesla = Object.create(car);
console.log(tesla.wheels); // Output: 4
console.log(tesla.engine()); // Output: Wwwwhhoooooshhh!
tesla.engine = function() {
    return "Silent but deadly!";
}

console.log(tesla.engine()); // Output: Silent but deadly!

let mercedes = Object.create(vehicle);
console.log(mercedes.engine()); // Output: Vroom Vroom
mercedes.engine = function() {
    return "Luxury and exquisiteVroom!";
}
console.log(mercedes.engine()); // Output: Luxury and exquisiteVroom!

const Honda = Object.create (car);
console.log(Honda.engine()); // Output: Wwwwhhoooooshhh!
Honda.engine = function() {
    return "Reliable and efficient Vroom!";
}
console.log(Honda.engine()); // Output: Reliable and efficient Vroom!

let Toyota = Object.create (car);
console.log(Toyota.engine()); // Output: Wwwwhhoooooshhh!
Toyota.engine = function() {
    return "Affordable and practical Vroom!";
}
console.log(Toyota.engine()); // Output: Affordable and practical Vroom!

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham",

}
//ADDING AND DELETING PROPERTIES IN OBJECTS
band.keyboard = "Seun Isaac";
delete band.drums;

//CHECKING FOR PROPERTIES 
console.log(band.hasOwnProperty("drums")); // Output: false



//CONVERTING OBJECTS TO ARRAYS
console.log(Object.keys(band)); // Output: ["vocals", "guitar", "bass", "drums"]

console.log(Object.values(band)); // Output: ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"]

console.log(Object.entries(band)); // Output: [["vocals", "Robert Plant"], ["guitar", "Jimmy Page"], ["bass", "John Paul Jones"], ["drums", "John Bonham"]]


//ITERATING THROUGH OBJECTS USING FOR...IN LOOP

for (let job in band) {
     console.log(band[job]); // Output: Robert Plant, Jimmy Page, John Paul Jones, John Bonham


       console.log(`On ${job}, It's ${band[job]}!`); // Output: vocals: Robert Plant, guitar: Jimmy Page, bass: John Paul Jones, drums: John Bonham
}


//CONVERTING OBJECTS TO STRINGS USING JSON.stringify()
console.log(JSON.stringify(band)); // Output: {"vocals":"Robert Plant","guitar":"Jimmy Page","bass":"John Paul Jones","drums":"John Bonham"}

//ADDING VALUES TO OBJECTS

