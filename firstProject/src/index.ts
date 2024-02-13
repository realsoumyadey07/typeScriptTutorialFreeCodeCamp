class User {
     protected _courseCount : number = 1;
     private readonly city: string = "Kolkata";
     constructor(private email: string, public name: string){
          this.email = email;
          this.name = name;
     }
     get getEmail(): string{
          console.log(this.email);
          return this.email;
     }
     set courseCount(courseNum: number){
          if (courseNum <=1){
               throw new Error("It should be more than 0");
          }
          this._courseCount = courseNum;
     }
}
class SubUser extends User {
     isFamily: boolean = true;
     changeCourseCount(count: number): void{
          this._courseCount = count;
     }
}


const per1 = new User('soumya@gmail.com', "soumya dey");
// console.log(per1);
console.log(per1.getEmail);


