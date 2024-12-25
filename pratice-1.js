// let values1 = ['Apple', 1, false];
// let values2 = ['Fries', 2, true];
// let values3 = ['Mars', 9, 'Apple'];

// function findCommonValue(values1, values2, values3) {
//     let CommonValue = [];

//     for (let i = 0; i < values1.length; i++) {
//         let value = values1[i];
        
        
//         if ((values2.includes(value) || values3.includes(value)) && !CommonValue.some(pos => pos.index === i)) {
//             CommonValue.push({ value: value, index: i });
//         }
//     }

//     return CommonValue.length > 0 ? CommonValue : null;
// }

// let result = findCommonValue(values1, values2, values3);
// console.log(result);


// function sumEvenNumbers(start, end) {
//     let sum = 0;
    
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {  
//             sum += i; 
//         }
//     }
    
//     return sum;
// }

// console.log("The sum of even numbers from 1 to 10 is: " + sumEvenNumbers(1, 10));  // 30
// console.log("The sum of even numbers from 8 to 20 is: " + sumEvenNumbers(8, 20));  // 98


function countString(input, type) {
    var str = input;

    str = input.split(" ").length;
    return str
    // let word = 0;
    // if(type === "w"){
    //     for(i = 0; i <= input.lenght;i++){
    //         word += i;
    //         console.log(word);
    //     }
    // }

}


console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8
