// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// // Class is part of javasscript OOP where class is an function template which is provide us a constructor methodd which is help us to create objects props and we can use new keyword for create an instance of objects.

// let u1 = new User("Ayushman", 24);
// console.log(u1);


class Vehical{
    constructor(vehicalName, vehicalPrice, vehicalColor){
        this.vehicalName = vehicalName;
        this.vehicalPrice = vehicalPrice;
        this.vehicalColor = vehicalColor;
    }
}

class Car extends Vehical{}
class Bike extends Car{}
class Cycle extends Bike{}

// ------------------Vehical----------------
// ------Car----<--------------->---Bike------

let c1 = new Car("Audi", 232232, "Black");
let c2 = new Car("Omni", 3232, "Green");
let c3 = new Car("Swift", 9389, "Orange");

let b1 = new Bike("Honda", 2323, "Red");
let b2 = new Bike("Hunter", 822323, "Yellow");
let b3 = new Bike("Skooty", 293, "Pink");

let cy1 = new Cycle("Hurculas", 2344, "Gray");
let cy2 = new Cycle("Leady Bird", 23484, "Red");
let cy3 = new Cycle("Audi", 23442, "Blue");

// 0, 1, 2
let allCars = [c1, c2, c3]; 
// 0, 1, 2
let allBike = [b1, b2, b3];
// 0, 1, 2
let allCycle = [cy1, cy2, cy3];

// -----------------0---------1-------2
let allVehical = [...allCars, ...allBike, ...allCycle]

console.log(allVehical)
// console.log(allCars)
// console.log(allBike)
// console.log(allCycle)

// ---------------------------------------------------------------

// Parent
class Person{
    constructor(name){
        this.name = name;
    }

    // Method
    introduce(){
        // Greeting
        console.log("My Name is ", this.name)
    }
}

// Child
class Student extends Person{
    constructor(name, course){
        // By the use of super method we can use parent custrucctor properties and method in child or extended class.
        super(name);

        // Own Props/
        this.course = course;
    }

    // Method from Sudent - Which is containing a global vlues from parent or outside class values or own values.
    study(){
        console.log(this.name + "is stying in ", this.course);
    }
}

let std1 = new Student("Ayushman", "Web Development");
std1.introduce();
std1.study();