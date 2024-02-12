"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.city = "Kolkata";
        this.email = email;
        this.name = name;
    }
    getEmail() {
        console.log(this.email);
    }
}
const per1 = new User('soumya@gmail.com', "soumya dey");
// console.log(per1);
console.log(per1.getEmail());
