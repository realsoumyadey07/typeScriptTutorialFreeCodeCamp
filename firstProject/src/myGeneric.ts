const score: Array<number> = [];
const names:Array<string> = [];

function identityThree<Type>(val: Type): Type{
    return val;
}
//arrow function
const getMore = <T,>(products: T[]): T =>{
    return products[0];
}

interface Bootle {
    brand: string;
    type: number;
}
identityThree<Bootle>({brand: 'milton', type: 1});
getMore<Bootle>([{brand: 'paras', type: 3}]);