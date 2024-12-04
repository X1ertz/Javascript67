console.log("\n*****Concatenation with template literal*****\n");

let str1 = "Javascript";
let str2 = "fun";

console.log(`I am writing code in ${str1}`);
console.log(`Formatting in ${str1} is ${str2}!`);

console.log("\n*******Expressions in template literal\n");

let bool1 = true;
console.log(`1+1is ${1+1}`);
console.log(`The Opposite of true is ${!bool1}`);

function getVowels(str){
    const m = str.match(/[aeiou]/gi);
    if(m === null){
        return 0;
    }
    return m.length;
}
console.log(getVowels("Seeing"))

function test(t){
    if(t === undefined){
        return "undefined value!";
    }
    return t;
}

let X = "Hello";
console.log(test(X));