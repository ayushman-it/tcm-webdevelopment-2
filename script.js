// class BankAccount{
//     // Private Scope/Variable
//     #balance = 4500;

//     deposit(amnt){
//         if(amnt > 0){
//             this.#balance += amnt;
//         }
//     }

//     getBalance(){
//        return this.#balance;
//     }
// }

// const account = new BankAccount();

// // User Deposited Money
// account.deposit(3000);

// // User Seen his deposted money on screen
// console.log(account.getBalance())

// class Mobile{
//     #password = 1234;

//     showPassword(){
//         return this.#password;
//     }
// }

// let phone = new Mobile();
// console.log(phone.showPassword());

// class Animal{
//     #name = "Tommy";

//     constructor(name){
//         this.#name = name
//     }

//     getName(){
//         return this.#name;
//     }

//     eat(){
//         console.log(this.#name + " is eating...");
//     }
// }

// class Dog extends Animal{
//     bark(){
//         console.log(this.getName() + " is barking");
//     }
// }

// let dog = new Dog("Bruno");

// dog.bark();

// console.log(dog.#name);



// console.log("Hello World")

// console.log("Powder");

class ATM{
    withdraw(){
        this.#checkbalanace();
        this.#verify();

        console.log("Cash Withdraw")
    }

    #checkbalanace(){
        console.log("Checking Balance...")
    }

    #verify(){
         console.log("Verfying...");
    }
}

let atm = new ATM();

atm.withdraw();
// console.log()
// document.getElementById()
