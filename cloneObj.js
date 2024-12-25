const obj1 = {
    person: 'Xeklovepin',
    weight: 99
}

const obj2 = {...obj1};
obj2.weight = 89;
console.log(obj1);
console.log(obj2);
