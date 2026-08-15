// alert('Welcome');
// document.write("hello students");
// let result = confirm("do you want to continew");
// let uname = prompt("enter your name");
// alert("hello" + " " + uname);

// let product = {
//     name: "marker CT ball Standard pen ( Black )",
//     rating: "Five star",
//     list: "add to favourite",
//     price: 220,
// }
// console.log(product);

// let product2 = {
//     name: "Dotted CT ball Standard pen ( Red )",
//     rating: "Five star",
//     list: "add to favourite",
//     price: 150,
// }
// console.log(typeof (product2));

// console.log("hello world");

// operators //

// let a = 2
// let b = 5

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// console.log(a ** b)

// Unary Operators //

// let a = 5
// let b = 4

// console.log("a = ", a, " & b = ", b);
// a++;
// console.log(a)

// let a = 5
// let b = 5

// console.log("5 == 5", a == b)

// let a = 6
// let b = 5

// console.log("6 == 5", a == b)

// 1. array

// let allcities = ["waraseoni", "balaghat", "seoni", "bhopal", "delhi", "noida", "pune"]
// console.log(allcities[4])

// 2. objects

let allusers = [
    {
        name: "priya soni",
        city: "waraseoni",
        age: 22,
        phone: 7247632099
    }, {
        name: "jyoti soni",
        city: "delhi",
        age: 23,
        phone: 7248775469
    }, {
        name: "priyanka",
        city: "jabalpur",
        age: 25,
        phone: 7254532099
    }, {
        name: "Ayushman",
        city: "Raipur",
        age: 24,
        phone: 8239289389
    },
    {
        name: "Varun",
        age: 24,
        city: "Bilaspur",
        phone: 8239289389
    },
    {
        name: "Harish",
        age: 28,
        city: "Korba",
        phone: 8239289389
    }
]

// console.log(allusers)

//  console.log(allusers[1].name)
//  console.log(allusers[1].age)
//  console.log(allusers[1].city)

// console.log(allusers[0].name, allusers[0].city, allusers[0].age, allusers[0].phone)

// for (let agent = 0; agent < allusers.length; agent++) {
//     console.log(allusers[agent].name)
//     console.log(allusers[agent].age)
//     console.log(allusers[agent].phone)
// }


// Loops

// for loop 

// for(let agent = 0; agent < allusers.length; agent++){
//     console.log(agent, typeof(agent))
// }

// for in loop 

for(let agent in allusers){
    console.log(agent, typeof(agent))
}

// for of loop

// for(let agent of allusers){
//     console.log(agent, typeof(agent))
// }

// for each loop 

// allusers.forEach(agent => {
//     console.log(agent, typeof(agent))
// })

// while

let num = 20;

while(num <= 15){
    console.log(num);
    num++;
}

// if else

    // let age = 18;

    // if(age == 18){
    //     console.log("Candidate is eligible for a exam")
    // }
    // else if(age >= 50){
    //     console.log("Candidate is too old...")
    // }
    // else{
    //     console.log("something went wrong")
    // }


    let color = "green";

    if(color == "blue"){
        console.log("yes color is blue")
    }
    else if(color == "yellow"){
        console.log("yes color is yellow")
    }
    else if(color == "green"){
        console.log("yes color is green")
    }
    else{
        console.log("something went wrong")
    }