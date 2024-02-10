let score: number | string ;
score = 99;
score = "85";

// console.log(score);

type User = {
    name: string,
    id: number
}
type Admin = {
    username: string,
    id: number
}
let soumya: User | Admin = {name: "Soumya Dey", id: 119};
soumya = {username: "The Developer", id: 119};
console.log(soumya);

export {}