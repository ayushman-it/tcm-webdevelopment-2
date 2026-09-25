 class car {
    constructor(name,minPrice,maxPrice){
        this.name = name;
        this.minPrice =minPrice;
        this.maxPrice =maxPrice;
       
    }
}
 class carsSection{
     #cars;

    constructor(title,cars){
        this.title = title ;
        this.#cars = cars;
    }

    getCarByBudget(minBudget,maxBudget){
        return this.#cars.filter((car) =>{
            return car.minPrice <= maxBudget && 
            car.maxPrice >= minBudget;
        })
    }

    getcars(){
        return this.#cars;
    }
}

class carSearch extends carsSection {
    constructor(title,cars){
    super(title,cars);
    }

    getSelectionTitle (){
       return this.title;
    }
};

const brezza = new car(
    "Maruti Suzuki Brezza",
    7.40 , 13.71 
    
);
const punch = new car(
    "Tata Punch",
    5.75,10.77
   
);
const fronx = new car(
    "Maruti Suzuki fronx",
    6.85 , 11.98 
  
);
const scorpioN = new car(
    "mahindra ScorpioN",
    18.40 , 25.71 
   
);

const mahundraBe3 = new car(
    "Mahindra BE 6",
    19.45 , 26.95 
    
);
const victorious = new car(
    "victoriousEV",
   15.99 - 20.21
   
);
const punchEv = new car(
    "Tata Punch Ev",
    9.99 - 12.99 
  
);
const tiago = new car(
    "Tata Tiago",
    9.79 - 12.99
   
);
const skodaSlavia = new car(
    "Skoda Slavia Facelift",
   10.50 - 18.50 
    
);
const skodaSupra = new car(
    "Skoda Superb 2026",
     50
   
);
const Volkswagen = new car(
    "Volkswagen Virtus Facelift",
   11.99
  
);
const Kia  = new car(
    "Kia Carens Clavis",
    11.29 , 22.71 
   
);

const searchedCars = [brezza,punch,fronx,scorpioN,mahundraBe3,victorious,punchEv,tiago,skodaSlavia,skodaSupra,Volkswagen];


const searched = new carSearch("the most searched car ",searchedCars);
// const minBudget = 20;
// const maxBudget = 25;

let btn = document.querySelector('#searchBtn');
btn.addEventListener('click',function(){
    const minBudget =  Number(
        document.getElementById("minBudget").value
    );
    const maxBudget =  Number(
        document.getElementById("maxBudget").value
    );

    const result = searched.getCarByBudget(minBudget,maxBudget);
    console.log(result);
})








