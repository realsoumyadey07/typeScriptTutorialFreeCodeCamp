"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "soumya",
    email: 'soumya@gmail.com',
    isActive: true
};
// function createUser({name: string, isPaid: boolean}) {
//      return {name: "soumya", isPaid: false};
// }
// createUser({name: "Soumya Dey", isPaid: false});
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return {};
}
var newUser = { name: "Soumya Dey", isPaid: false, email: "Soumya@gmail.com" };
createUser(newUser);
