//Main Parent(Body)---> Create ---> append ---> SetAttribute ---> Content

// Body
let body = document.querySelector('body');

// Create Header
let header = document.createElement('header');
let headerContainer = document.createElement('div');
let headerRow = document.createElement('div');
let col1 = document.createElement('div');
let col2 = document.createElement('div');

// Append (Make a child)
body.appendChild(header);
header.appendChild(headerContainer);
headerContainer.appendChild(headerRow);
headerRow.appendChild(col1);
headerRow.appendChild(col2);


// Set Attribute 
header.setAttribute('class', 'py-2 shadow-sm')
headerContainer.setAttribute('class', 'container');
headerRow.setAttribute('class', 'row align-items-center');
col1.setAttribute('class', 'col-md-6');
col2.setAttribute('class', 'col-md-6');


// Content Creation
col1.innerHTML = `
    <div class='content'>
        <h3 class='mb-0'>Website Logo</h3>
    </div>
`;

col2.innerHTML = `
    <div class='content'>
        <ul class='navbar nav'>
            <li class='nav-item'><a class='nav-link text-dark'  href='#'>Home</a></li>
            <li class='nav-item'><a class='nav-link text-dark'  href='#'>About</a></li>
            <li class='nav-item'><a class='nav-link text-dark'  href='#'>Service</a></li>
            <li class='nav-item'><a class='nav-link text-dark'  href='#'>Galary</a></li>
            <li class='nav-item'><a class='nav-link text-dark'  href='#'>Contact Us</a></li>
        </ul>
    </div>
`;


// -------Section-----

// Create
let section = document.createElement('section');
let sectionContainer = document.createElement('div');
let sectionRow = document.createElement('div');
let seccol1 = document.createElement('div');

// Append
body.appendChild(section);
section.appendChild(sectionContainer);
sectionContainer.appendChild(sectionRow);
sectionRow.appendChild(seccol1);

// Set Attribute
section.setAttribute('class', 'py-4 border-bottom');
sectionContainer.setAttribute('class', 'container');
sectionRow.setAttribute('class', 'row');
seccol1.setAttribute('class', 'col-md-12');


// Content

seccol1.innerHTML = `
    <div class='sec-content text-center'>
        <img src="https://app.thecodemunk.in/assets/assets/icon.884d379cf1a5c7b7210335680a3cfcfd.png" width='100'>
        <h1 class='display-1 fw-semibold'>TCM <span class='text-warning'>One</span></h1>
        <p class='w-75 my-3 m-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto facere doloremque porro! Dolorem eveniet unde iste tempora officiis, incidunt ut mollitia fugit?</p>

        <div class='cta'>
            <button class='btn btn-dark rounded-0'>Explore TCM One</button>
            <button class='btn btn-light rounded-0'>Download TCM One App</button>
        </div>
    </div>
`;

// -------Article-----

// Create
let article = document.createElement('article');
let articleContainer = document.createElement('div');
let articleRow = document.createElement('div');


// Append
body.appendChild(article);
article.appendChild(articleContainer);
articleContainer.appendChild(articleRow);


// Set Attribute
article.setAttribute('class', 'py-4 border-bottom');
articleContainer.setAttribute('class', 'container');
articleRow.setAttribute('class', 'row');
articleRow.setAttribute('id', 'products');

let productsData = document.getElementById('products');



// Object Product 

let product = [
    {
        prName :" Website Development",
        prPrice: "2300",
        seats : 20,
        prdruration: "2 Month",
        prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
    },
    {
        prName :" App Development",
        prPrice: "2300",
        seats : 10,
        prdruration: "2 Month",
        prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
    },{
        prName :" Graphic Development",
        prPrice: "2300",
        seats : 20,
        prdruration: "2 Month",
        prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
    }
    ,{
        prName :" DSA",
        prPrice: "2300",
        seats : 9,
        prdruration: "2 Month",
        prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
    }
    ,{
        prName :"UI & UX",
        prPrice: "2300",
        seats : 10,
        prdruration: "2 Month",
        prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
    },
       {
        prName :"Python + Django",
        prPrice: "2300",
        seats : 23,
        prdruration: "2 Month",
        prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
    },
       {
        prName :"DSA + JAVA",
        prPrice: "2300",
        seats : 4,
        prdruration: "2 Month",
        prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
    }
    ,
       {
        prName :"Graphic Design",
        prPrice: "24500",
        seats : 8,
        prdruration: "2 Month",
        prDescrption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit ipsam vitae eum consequatur voluptas expedita architecto"
    }
];


for(let pr of product){
    productsData.innerHTML +=`
        <div class='col-md-3'>
            <div class='card my-2 ${(pr.seats > 10) ? 'bg-primary-subtle text-primary' : 'bg-warning-subtle text-dark'}'>
                <div class='card-body'>
                    <span class="badge rounded-pill ${(pr.seats > 10) ? " text-bg-primary" : "text-bg-danger"}">${(pr.seats > 10) ? "Seats Available only"  : "Low Seats Alert"} - ${pr.seats}</span>
                    <h4>${pr.prName}</h4>
                    <p class='fw-bold'>${pr.prdruration}</p>
                    <p>${pr.prDescrption}</p>
                    <h3 class='text-warning fw-bold'>${pr.prPrice}</h3>
                </div>
            </div>
        </div>
    `;
}

