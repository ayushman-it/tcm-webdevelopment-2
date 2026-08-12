// alert("Hello Javascript");
// console.log("Hello  TCM"); - Rec
// document.write(2 + 3);
// confirm("Are you want to delete this ?");
// prompt("Please enter your product QTY.");

// var (Old), let, const

// --var = keyword, name = variable, = = operator , Ayushman = Value
// var name = "Ayushman";

// Declearation
// var name;

// // Initilization/ assign
// name = "Ayushman";
// // Initilization/ assign
// name = "Alok";
// // Initilization/ assign
// name = "Rahul";
// // Initilization/ assign
// name = "Manoj";
// // Initilization/ assign
// name = "Rajesh";

// // Declearation
// var name;

// // Initilization/ assign
// name = "Sumit";

// console.log(name);


// Declearation
// let name;

// // Initilization/ assign
// name = "Ayushman";

// // Initilization/ assign
// name = "Rakesh";

// // Initilization/ assign
// name = "Ranjit";

// console.log(name)



// const roll = 8238278;
// console.log(roll)

// Data Type

// Premetive
// String
// let name = "Ayushman";
// console.log(name, typeof(name));
// Number
// let num = 55;
// console.log(num, typeof(num));
// Boolean
// let deleteProject = confirm("Are you want to delete this project");
// console.log(deleteProject, typeof(deleteProject));
// undefined
// let age;
// console.log(age, typeof(age));
// null
// let salary= null;
// console.log(salary, typeof(salary))
// BigInt
// let adhaar = BigInt(322928398667772938293);
// console.log(adhaar, typeof(adhaar));

// Non Premetive
// Array
// let users = ["Rajesh", "Lakhan", "Ramesh", "Mohan"]

// console.log(users[1], typeof(users));
// console.log(users[2], typeof(users));


// Object

// Array Object
let users = [
    {
        name: "Ramesh",
        age: 23,
        city: "Raipur"
    },
    {
        name: "Rakesh",
        age: 24,
        city: "Bhilai"
    },
    {
        name: "Mohan",
        age: 24,
        city: "Bihar"
    },
    {
        name: "Suresh",
        age: 22,
        city: "Durg"
    },
    {
        name: "Amit",
        age: 25,
        city: "Bilaspur"
    },
    {
        name: "Rahul",
        age: 21,
        city: "Korba"
    },
    {
        name: "Vikas",
        age: 27,
        city: "Rajnandgaon"
    },
    {
        name: "Ankit",
        age: 26,
        city: "Jagdalpur"
    },
    {
        name: "Rohit",
        age: 23,
        city: "Ambikapur"
    },
    {
        name: "Manish",
        age: 28,
        city: "Raipur"
    },
    {
        name: "Pankaj",
        age: 24,
        city: "Bhilai"
    },
    {
        name: "Deepak",
        age: 29,
        city: "Durg"
    },
    {
        name: "Arun",
        age: 22,
        city: "Bilaspur"
    },
    {
        name: "Karan",
        age: 25,
        city: "Korba"
    },
    {
        name: "Vivek",
        age: 27,
        city: "Raipur"
    },
    {
        name: "Nikhil",
        age: 21,
        city: "Durg"
    },
    {
        name: "Akash",
        age: 26,
        city: "Bhilai"
    },
    {
        name: "Sumit",
        age: 30,
        city: "Raipur"
    },
    {
        name: "Varun",
        age: 24,
        city: "Bilaspur"
    },
    {
        name: "Harish",
        age: 28,
        city: "Korba"
    }
];

// console.log(users)

// console.log(users[1].name)
// console.log(users[1].age)
// console.log(users[1].city)

// for(let agent = 0; agent < users.length; agent++){
//     console.log(users[agent].name)
//     console.log(users[agent].age)
//     console.log(users[agent].city)
// }


// Loops

// for loop = It will return indexings as a number
for(let agent = 0; agent < users.length; agent++){
//    console.log(agent, typeof(agent))
}

// for in loop - It will return indexings as a string

for(let agent in users){
//    console.log(agent, typeof(agent))
}

// for of loop -  It will return itretes values

for(let agent of users){
//    console.log(agent, typeof(agent))
}

// for each loop - It will return itretes values

users.forEach(agent => {
    //  console.log(agent, typeof(agent))
})

// while

// let num = 15;

// while(num <= 10){
//     console.log(num);
//     num++;
// }

// do while loop

let num = 41;

do{
    console.log(num);
    num++;
}
while(num <= 10)