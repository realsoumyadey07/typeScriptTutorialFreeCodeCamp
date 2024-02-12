class User {
     email: string;
     name: string;
     readonly city: string = "Kolkata";
     constructor(email: string, name: string){
          this.email = email;
          this.name = name;
     }
}

const per1 = new User('soumya@gmail.com', "soumya dey");
console.log(per1);

