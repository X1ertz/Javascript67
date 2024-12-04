console.log(Math.floor(5.05));

console.log(Math.ceil(7.004));

console.log(Math.random());

console.log(Math.min(-2,-3,-1));


//date object

const start = Date.now();

console.log('starting timer...');

setTimeout(()=>{
    const millis = Date.now() - start;
    console.log(`Second elapsed = ${Math.floor(millis/1000)}`);
},2000);

const str = 'The quick brow fox jumps over the lazy dog. ';

const words = str.split(' ');
console.log(words[3]);

const chars = str.split('');
console.log(chars[8]);

// function reverseString(value){
//     let reverseValue = "";

//     value.split("").forEach ((char)=>{
//         reverseValue = char + reverseValue;
//     });
//     return reverseValue;
// }

// console.log(reverseString("Reverse Me"));

function reverseString(value){

    const reverseValue = value.split('').reverse().join('')
    return reverseValue;
}

console.log(reverseString("Hello Javascript"));


function circumference(r){
    if(Number.isNaN(Number.parseFloat(r))){
        return 0;
    }
    return parseFloat(r)*2.0*Math.PI;
}

console.log(circumference("4.567abcdefgh"));

console.log(circumference("abcdefgh"))