//array = method - foreach, map, filter,reduce,find,findIndex

const people = [
    {name: 'Nadiia', age: 39, budget: 5000},
    {name: 'Peter', age: 17, budget: 2500},
    {name: 'Naimi', age: 23, budget: 3000},
    {name: 'Mario', age: 25, budget: 2700},
    {name: 'Pavel', age: 35, budget: 4000},
    {name: 'sandria', age: 15, budget: 2300}
]
// for
for (let i=0; i<people.length; i++) {
    console.log(people[i]);
}

//forEach 1
people.forEach(function(person, index, pArr) {
    console.log(person);
    console.log(index);
    console.log(pArr);
})
//forEach 2 new
people.forEach(person => console.log(person));

//for of

for (let person of people){
    console.log(person);
}

//Map

const newPeople = people.map(person => {
    return person.name;
});
console.log(newPeople);

const newPeople1 = people.map(person => {
    return `${person.name} (${person.age})`;
});
console.log(newPeople1);

const newPeople2 = people.map(person => {
    return person.age * 4;
});
console.log(newPeople2);

//Filter
const adults =[];//1 method
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
        adults.push(people[i])
    }
}
console.log(adults);
const adult1 = people.filter(person => {//2 method
    if( person.age >= 18) {
        return true;
    }
});
console.log(adult1);

const adult3 = people.filter(person => person.age >=18);//3 method
console.log(adult3); 

// reduce

let amount = 0;//1 mothod
for(let i = 0; i< people.length; i++ ) {
    amount += people[i].budget;
}
console.log(amount);

//2 mothod
const amount1 = people.reduce((total, person) => {
    return total +person.budget;
}, 0)
console.log(amount1);

//3 method
const amount3 = people.reduce((total, person) => total + person.budget, 0);
console.log(amount3);


//Find
const peter = people.find(person => person.name === 'Peter')
console.log(peter);
//FindIndex

const peterIndex = people.findIndex (person => person.name === 'Peter');
console.log(peterIndex);

//practika alle mothod zusammen
const newPeople3 = people.filter(person => person.budget > 3000)
.map(person => {
    return {
        info: `${person.name} (${person.age})`,
        budget: person.budget
    };
})
.reduce((total, person) => total + person.budget, 0)

console.log(newPeople3);
