const arrayOfNumbers = [1,2,3,4];

const sum = arrayOfNumbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
});

console.log(sum);

const array = [15,16,17,18,19];

function reducer(accumulator,currentValue,index){
    const returns = accumulator+currentValue;
    console.log(`accumulator: ${accumulator},currentvalue: ${currentValue}, index: ${index}, return: ${returns}`

);
 return returns;
}

array.reduce(reducer);


const finalPratiipants = ["Talor","Doreamon","Nobita","Giant","Shizuka"];

const annoucerments = finalPratiipants.map((member)=>{
    return member+"joined the contest.";
});

console.log(annoucerments);

const kvArray = [
    {key:1,value: 10},
    {key:2,value: 20},
    {key:3,value:30},
];

const reformatedArray = kvArray.map(({key,value})=>({[key]:value}));
console.log(reformatedArray);
console.log(kvArray);