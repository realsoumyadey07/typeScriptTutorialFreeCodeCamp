interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrial: ()=> void,
    lastTry?: ()=> string,
    stringRet(): string
}

interface Admin extends User {
    role: "Admin" | "ta" | "learner"
}

const soumya : User = {
    dbId: 22,
    email: "soumya@gmail.com",
    userId: 22,
    startTrial: ()=> {
        console.log("Hello world!");
    },
    stringRet: ()=>{
        return "";
    }
    
}
const soumya1 : Admin = {
    dbId: 22,
    email: "soumya@gmail.com",
    userId: 22,
    startTrial: ()=> {
        console.log("Hello world!");
    },
    stringRet: ()=>{
        return "";
    },
    role: "ta"
}

export {}