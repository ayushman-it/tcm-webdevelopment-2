// // alert('Welcome');
// // document.write("hello students");
// // let result = confirm("do you want to continew");
// // let uname = prompt("enter your name");
// // alert("hello" + " " + uname);

// // let product = {
// //     name: "marker CT ball Standard pen ( Black )",
// //     rating: "Five star",
// //     list: "add to favourite",
// //     price: 220,
// // }
// // console.log(product);

// // let product2 = {
// //     name: "Dotted CT ball Standard pen ( Red )",
// //     rating: "Five star",
// //     list: "add to favourite",
// //     price: 150,
// // }
// // console.log(typeof (product2));

// // console.log("hello world");

// // operators //

// // let a = 2
// // let b = 5

// // console.log(a + b)
// // console.log(a - b)
// // console.log(a * b)
// // console.log(a / b)
// // console.log(a % b)
// // console.log(a ** b)

// // Unary Operators //

// // let a = 5
// // let b = 4

// // console.log("a = ", a, " & b = ", b);
// // a++;
// // console.log(a)

// // let a = 5
// // let b = 5

// // console.log("5 == 5", a == b)

// // let a = 6
// // let b = 5

// // console.log("6 == 5", a == b)

// // 1. array

// // let allcities = ["waraseoni", "balaghat", "seoni", "bhopal", "delhi", "noida", "pune"]
// // console.log(allcities[4])

// // 2. objects

// // let allusers = [
// //     {
// //         name: "priya soni",
// //         city: "waraseoni",
// //         age: 22,
// //         phone: 7247632099
// //     }, {
// //         name: "jyoti soni",
// //         city: "delhi",
// //         age: 23,
// //         phone: 7248775469
// //     }, {
// //         name: "priyanka",
// //         city: "jabalpur",
// //         age: 25,
// //         phone: 7254532099
// //     }, {
// //         name: "Ayushman",
// //         city: "Raipur",
// //         age: 24,
// //         phone: 8239289389
// //     },
// //     {
// //         name: "Varun",
// //         age: 24,
// //         city: "Bilaspur",
// //         phone: 8239289389
// //     },
// //     {
// //         name: "Harish",
// //         age: 28,
// //         city: "Korba",
// //         phone: 8239289389
// //     }
// // ]

// // console.log(allusers)

// //  console.log(allusers[1].name)
// //  console.log(allusers[1].age)
// //  console.log(allusers[1].city)

// // console.log(allusers[0].name, allusers[0].city, allusers[0].age, allusers[0].phone)

// // for (let agent = 0; agent < allusers.length; agent++) {
// //     console.log(allusers[agent].name)
// //     console.log(allusers[agent].age)
// //     console.log(allusers[agent].phone)
// // }

// //------------------------------------------------------------------------------------------------------------------------------------//

// // Loops

// // for loop 

// // for(let agent = 0; agent < allusers.length; agent++){
// //     console.log(agent, typeof(agent))
// // }

// // for in loop 

// // for(let agent in allusers){
// //     console.log(agent, typeof(agent))
// // }

// // for of loop

// // for(let agent of allusers){
// //     console.log(agent, typeof(agent))
// // }

// // for each loop 

// // allusers.forEach(agent => {
// //     console.log(agent, typeof(agent))
// // })

// // if else

// // let age = 18;

// // if(age == 18){
// //     console.log("Candidate is eligible for a exam")
// // }
// // else if(age >= 50){
// //     console.log("Candidate is too old...")
// // }
// // else{
// //     console.log("something went wrong")
// // }


// // let color = "green";

// // if(color == "blue"){
// //     console.log("yes color is blue")
// // }
// // else if(color == "yellow"){
// //     console.log("yes color is yellow")
// // }
// // else if(color == "green"){
// //     console.log("yes color is green")
// // }
// // else{
// //     console.log("something went wrong")
// // }

// let mode = "yellow";
// let color;

// if (mode === "dark"){
//     color ="black";
// } else if (mode === "yellow"){
//     color ="yellow";
// } else if(mode === "blue"){
//     color ="blue";
// } else if(mode === "light"){
//     color ="white";
// }else{
//     color ="pink"
// }
// console.log(color)

// let mode = "light";
// let color;

// if (mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color ="white";
// }



// console.log(color);

//-------------------------------------------------------------------------------------------------------------------------------------//

// // // Dom - document object model

// // // console.log(document.getElementsByClassName('h1'));
// // // console.log(document.getElementById("one"));
// // // console.log(document.getElementsByClassName('class'));

// // // let row = document.getElementById('oneId');


// //---------------------------------------------------------------------------------------------------------------------------------//

// //Main Parent(Body)---> Create ---> append ---> SetAttribute ---> Content ----> Styling (Optional)

// // Body
// let body = document.querySelector('body');

// // Create Header
// let header = document.createElement('header');
// let headerContainer = document.createElement('div');
// let headerRow = document.createElement('div');
// let col1 = document.createElement('div');
// let col2 = document.createElement('div');

// // Append (Make a child)
// body.appendChild(header);
// header.appendChild(headerContainer);
// headerContainer.appendChild(headerRow);
// headerRow.appendChild(col1);
// headerRow.appendChild(col2);


// // Set Attribute 
// header.setAttribute('class', 'py-2 shadow-sm')
// headerContainer.setAttribute('class', 'container');
// headerRow.setAttribute('class', 'row align-items-center');
// col1.setAttribute('class', 'col-md-6');
// col2.setAttribute('class', 'col-md-6');


// // Content Creation
// col1.innerHTML = `
//     <div class='content'>
//         <h3 class='mb-0'>Website Logo</h3>
//     </div>
// `;

// col2.innerHTML = `
//     <div class='content'>
//         <ul class='navbar nav'>
//             <li class='nav-item'><a class='nav-link text-dark'  href='#'>Home</a></li>
//             <li class='nav-item'><a class='nav-link text-dark'  href='#'>About</a></li>
//             <li class='nav-item'><a class='nav-link text-dark'  href='#'>Service</a></li>
//             <li class='nav-item'><a class='nav-link text-dark'  href='#'>Galary</a></li>
//             <li class='nav-item'><a class='nav-link text-dark'  href='#'>Contact Us</a></li>
//         </ul>
//     </div>
// `;


// // -------Section-----

// // Create
// let section = document.createElement('section');
// let sectionContainer = document.createElement('div');
// let sectionRow = document.createElement('div');
// let seccol1 = document.createElement('div');

// // Append
// body.appendChild(section);
// section.appendChild(sectionContainer);
// sectionContainer.appendChild(sectionRow);
// sectionRow.appendChild(seccol1);

// // Set Attribute
// section.setAttribute('class', 'py-4 border-bottom');
// sectionContainer.setAttribute('class', 'container');
// sectionRow.setAttribute('class', 'row');
// seccol1.setAttribute('class', 'col-md-12');


// // Content

// seccol1.innerHTML = `
//     <div class='sec-content text-center'>
//         <img src="https://app.thecodemunk.in/assets/assets/icon.884d379cf1a5c7b7210335680a3cfcfd.png" width='100'>
//         <h1 class='display-1 fw-semibold'>TCM <span class='text-warning'>One</span></h1>
//         <p class='w-75 my-3 m-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto facere doloremque porro! Dolorem eveniet unde iste tempora officiis, incidunt ut mollitia fugit?</p>

//         <div class='cta'>
//             <button class='btn btn-dark rounded-0'>Explore TCM One</button>
//             <button class='btn btn-light rounded-0'>Download TCM One App</button>
//         </div>
//     </div>
// `;

// // Object Product 

// let product = [
//     {
//         prName: " Website Development",
//         prPrice: "2300",
//         prdruration: "2 Month",
//         prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
//     },
//     {
//         prName: " App Development",
//         prPrice: "2300",
//         prdruration: "2 Month",
//         prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
//     }, {
//         prName: " Graphic Development",
//         prPrice: "2300",
//         prdruration: "2 Month",
//         prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
//     }
//     , {
//         prName: " DSA",
//         prPrice: "2300",
//         prdruration: "2 Month",
//         prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
//     }
//     , {
//         prName: "UI & UX",
//         prPrice: "2300",
//         prdruration: "2 Month",
//         prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
//     },
//     {
//         prName: "Python + Django",
//         prPrice: "2300",
//         prdruration: "2 Month",
//         prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
//     },
//     {
//         prName: "DSA + JAVA",
//         prPrice: "2300",
//         prdruration: "2 Month",
//         prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
//     }

// ];

// // -------Article-----

// // Create
// let article = document.createElement('article');
// let articleContainer = document.createElement('div');
// let articleRow = document.createElement('div');


// // Append
// body.appendChild(article);
// article.appendChild(articleContainer);
// articleContainer.appendChild(articleRow);


// // Set Attribute
// article.setAttribute('class', 'py-4 border-bottom');
// articleContainer.setAttribute('class', 'container');
// articleRow.setAttribute('class', 'row');
// articleRow.setAttribute('id', 'products');

// let productsData = document.getElementById('products');

// for (let pr of product) {
//     productsData.innerHTML += `
//         <div class='col-md-3'>
//             <div class='card my-2'>
//                 <div class='card-body'>
//                     <h4>${pr.prName}</h4>
//                     <p class='fw-bold'>${pr.prdruration}</p>
//                     <p>${pr.prDescrption}</p>
//                     <h3 class='text-danger'>${pr.prPrice}</h3>
//                 </div>
//             </div>
//         </div>
//     `;
// }


