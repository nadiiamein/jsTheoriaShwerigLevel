//destructur

function calcValues (a,b) {
    return [
        a+b,
        a-b,
        a*b,
        a/b
    ]
}

const[sum,, mult, ...other] = calcValues(42,10);


 //const sum = result[0];
 //const sub = result[1];
 //console.log(sum, sub);
//const [sum, sub] = result; 
// console.log(result);
 console.log(sum, mult, other);
//Object
 
const person = {
    name: 'Peter',
    age: 27,
    adress: {
        country: 'Deutschland',
        city: 'Frank-am-Main'
    },
}

// const { 
//     name: firstName = 'Ohne Name',
//     age,
//     car = 'Keine Auto',
//     adress: {city: homeTown, country},
// } = person
//console.log(firstName, age, car, homeTown, adress );
const { name, ...info } = person;
console.log(name, info);

function logPerson({name: firstName = '111', age}) {
    console.log(firstName + ' ' + age);
}
logPerson(person);
