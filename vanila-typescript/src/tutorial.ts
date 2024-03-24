
//variable types
let greeting: string = 'Hello, typescript';
greeting = greeting.toUpperCase();

let age: number = 25;
age = age + 5;

let isAdult: boolean = age>=18;
isAdult = !isAdult;
console.log(isAdult);

//unions

let tax: number | string | boolean = 10;
tax = '$100';
tax = false;
//literals

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'error';

//loops
const books = ['1935', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for(let book of books){
    if(book === '1935'){
        foundBook = book;
        console.log(foundBook.length);
        break;
    }
}
console.log(foundBook?.length);

//arrays
let price: number[] = [100, 75, 42];

let fruit: string[] = ['apple', 'orange'];

let emptyValue: number[] = [];

let names: (string | number)[] = ['soumya', 'ram', 10000];

//objects

let car: {brand: string; year:number} = {
    brand: 'toyota',
    year: 2002
}
car.brand = 'ford';
car.year = 763513;
