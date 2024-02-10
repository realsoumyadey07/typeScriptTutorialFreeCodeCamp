type User = {
     name: string,
     email: string,
     isActive: boolean
}

function createUser(user: User): User {
     return {name: "Soumya Dey", email: "", isActive: true};
}

createUser({name: "Soumya Dey", email: "", isActive: true});



type Student = {
     readonly _id: string,
     name : string,
     email: string,
     isActive: boolean,
     credcardDetails?: number
}

let myUser: Student ={
     _id: "1245",
     name: "soumya",
     email: "soumyadey@gmail.com",
     isActive: false
}

function createStudent(u: Student){}

export {}