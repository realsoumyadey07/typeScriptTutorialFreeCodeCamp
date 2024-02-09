const User = {
     name: "soumya",
     email: 'soumya@gmail.com',
     isActive: true
}

// function createUser({name: string, isPaid: boolean}) {
//      return {name: "soumya", isPaid: false};
// }
// createUser({name: "Soumya Dey", isPaid: false});

function createUser({name: string, isPaid: boolean}): {}{
     return {};
}
let newUser = { name: "Soumya Dey", isPaid: false, email: "Soumya@gmail.com"};
createUser(newUser);
export {}