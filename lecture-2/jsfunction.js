// function printHello(name){
//     console.log("Hello "+ name);
//     return name + "hello";
// }
// console.log(printHello.name)
// let result = printHello("Aungkoon !");
// console.log(result);


let plusFive = (number) =>{
    return number + 5;
} ;
let f = plusFive;
console.log(plusFive(3));

console.log(f(9));


//arrow function
const add = (a,b)=> a+b;
console.log(add(1,2));

const substract = (a,b)=>{
    const result = a-b;
    return result;
};
console.log(substract(4,2));

const sum = (firstParam, secondParam)=>{
    return firstParam + secondParam;
};

console.log(sum(2,5));

const printHello = () =>{
    console.log("hell0");
}

printHello();


const checkWeight = (weight) =>{
    console.log(`Baggage Weight : ${weight} kilograms.`);
};

checkWeight(25);

const multiply = (a,b) => a*b;
console.log(multiply(2,30));

//callback function
function createQuote(quote,callback){
    let myQoute = "Like I always say"+quote;
    callback(myQoute);
}

function logQoute(quote){
    console.log(quote+'Yes...!');
}

createQuote("You will getting better! ",logQoute);

