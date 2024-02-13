"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Kolkata";
        this.email = email;
        this.name = name;
    }
    get getEmail() {
        console.log(this.email);
        return this.email;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("It should be more than 0");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount(count) {
        this._courseCount = count;
    }
}
const per1 = new User('soumya@gmail.com', "soumya dey");
// console.log(per1);
console.log(per1.getEmail);
