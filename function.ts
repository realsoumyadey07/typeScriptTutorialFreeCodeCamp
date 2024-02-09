//--------type of function----------
function addTow(num : number){
     return num + 2;
}
addTow(3);

function signUpUser(name: string, email: string, password: number){
     return console.log("You are logged in!");
     
}
signUpUser("Soumya Dey", "soumya@gmail.com", 13284563);

let loginUser = (name:string, email:string, isLoggedin: boolean = false)=>{
     return console.log("Yes logged in!");
     
}

loginUser("soumya", "s@s.com");

export {};