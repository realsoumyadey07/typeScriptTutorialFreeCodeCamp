function identityOne(val: number | boolean): number | boolean{
    return val;
}

function identityThree<Type>(val: Type): Type{
    return val;
}
interface Bottle {
    brand: string;
    type: number;
}

