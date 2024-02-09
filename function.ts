//--------type of function----------
// function addTow(num : number){
//      return num + 2;
// }
// addTow(3);

// function signUpUser(name: string, email: string, password: number){
//      return console.log("You are logged in!");
     
// }
// signUpUser("Soumya Dey", "soumya@gmail.com", 13284563);

// let loginUser = (name:string, email:string, isLoggedin: boolean = false)=>{
//      return console.log("Yes logged in!");
     
// }

// loginUser("soumya", "s@s.com");

// function getValue(myVal: number){
//      if(myVal > 5){
//           return true;
//      }
//      return "2000 ok";
// }

function consoleError(errmsg: string): void{
     console.log(`Hi ${errmsg}`); 
}
consoleError("soumya dey");
function handleError(errmsg: string): never{
     throw new Error(errmsg);
}

export {};