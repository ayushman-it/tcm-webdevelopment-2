// function calucu(num1, num2){
//     console.log(num1 + num2)
// }

// calucu(12, 23);

// let users = [
//     {
//         name : "Ayushman",
//         age: 23,
//     },
//      {
//         name : "Priyanshu",
//         age: 23
//     }, {
//         name : "Priya",
//         age: 23
//     },
//      {
//         name : "Arohi",
//         age: 23
//     }
// ]

// OOP is a part of Advanced Javascript from version ES6, it will help us to create an instance of object using new keyword insted of by literal object, that create reusable properties using constructor and we can create a method in class template. 

class User{
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    fullDetails(city, phone){
        this.city = city;
        this.phone = phone;
    }
}

let u1 = new User("Ayushman", 23);
u1.fullDetails("Bilaspur",899898928);

let u2 = new User("Priyanshu", 21);
u2.fullDetails("Bhilai", 9829892382);

let u3 = new User("Rahul", 24);
u3.fullDetails("Raipur", 8989839839);

let u4 = new User("Mohan", 34);
u4.fullDetails("Bihar", 347399343)

let allUser = [u1, u2, u3, u4];

allUser.forEach(i =>{
    console.log(i.name, i.age)
})

// console.log(u1.name, u2.name, u3.name, u4.name)


// Object - Car = Color, price, brand, showroom, type