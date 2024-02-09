"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//--------type of function----------
function addTow(num) {
    return num + 2;
}
addTow(3);
function signUpUser(name, email, password) {
    return console.log("You are logged in!");
}
signUpUser("Soumya Dey", "soumya@gmail.com", 13284563);
var loginUser = function (name, email, isLoggedin) {
    if (isLoggedin === void 0) { isLoggedin = false; }
    return console.log("Yes logged in!");
};
loginUser("soumya", "s@s.com");
