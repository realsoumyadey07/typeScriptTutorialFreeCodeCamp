let superHeros: string[] = [];
let villains: Array<string> = [];
let wapons: Array<number> = [];

superHeros.push("Ram", "Hanuman");
villains.push("ravan", "Indrajit");
wapons.push(1,2,3,4);

// console.log(superHeros);
// console.log(wapons);
type User = {
     name: string,
     isActive: boolean
}


const allUsers : Array<User> = [];
let myName: User = {
     name: "Soumya",
     isActive: true
}

type employeeType = {
     name: string,
     email: string,
     salary: number
}
const employee: Array<employeeType> = [];

// employee.push({name: "Soumya Dey", email: "soumya@gmail.com", salary: 100000});
// console.log(employee);

const data3: (string | number)[] = ['1',  '6'];

let seatAllotment: "window" | "crew";
seatAllotment = "window" ;


// allUsers.push(myName);
// console.log(allUsers);



export {}