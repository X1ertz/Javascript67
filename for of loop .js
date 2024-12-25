let str = "Hello";

let iterator = str[Symbol.interator]();
while(true){
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value);
}

for(let char of "test"){
    console.log(char);
}

let strr = "Hello";

let iterators = strr[Symbol.iterator]();

while(true){
    let result = iterator.next();
    if(result.done)break;
    console.log(result.value);
}
