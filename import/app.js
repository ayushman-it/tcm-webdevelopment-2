import User from '../export/app.js';

let u1 = new User("Ayushman", 23);
u1.fullDetails("Chourasiya");

let u2 = new User("Pratham", 21);
u2.fullDetails("Soni");

let u3 = new User("Priyanshu", 22);
u3.fullDetails("Sarangpure");

let u4 = new User("Rahul", 20);
u4.fullDetails("Patel");

let allUser = [u1, u2, u3, u4];

for(let user of allUser){
    console.log(user.surname)
}