class User {
     private email: string;
     public name: string;
     private readonly city: string = "Kolkata";
     constructor(private email: string, name: string){
          this.email = email;
          this.name = name;
     }
     getEmail(): void{
          console.log(this.email);
     }
}


const per1 = new User('soumya@gmail.com', "soumya dey");
// console.log(per1);
console.log(per1.getEmail());


