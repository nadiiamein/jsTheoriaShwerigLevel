//Spead und Rest

const citiesDeutschland = [ 'Berlin', 'Koln', 'Worms', 'Kiel'];
const citiesEuropa = ['Paris', ' Praga', 'London'];

const citiesDeutschlandWithPopulation = {
    Berlin: 20 ,
    Koln: 8, 
Worms: 5,
Kiel: 3

}
const citiesEuropaandWithPopulation ={
    Berlin: 23,
    Paris: 10,
    Praga: 3,
    London: 2
}

//Spread
 console.log(...citiesDeutschland);
 console.log(...citiesEuropa);

 const allCities = [...citiesEuropa, ...citiesDeutschland]
 console.log(allCities);
 const allCities2 = citiesDeutschland.concat(citiesEuropa);
 console.log(allCities2);

 console.log({...citiesEuropa});
 console.log({...citiesEuropaandWithPopulation, ...citiesDeutschlandWithPopulation});

 //Practice

 const numbers = [5, 15, 42, 36];
 console.log(Math.max(...numbers));//mit method spred
 console.log(Math.max.apply(null, numbers));//mit method apply
const divs = document.querySelectorAll('div');
console.log(divs);
const nodes = [...divs];
console.log(nodes);

//Rest

function sum(a,b) {
    return a + b;
}

const numbers1 = [1,2,3,5,4];
//spred!!
console.log(sum(...numbers1));
//Rest
function sum2(a,b, ...rest) {
    return a + b + rest.reduce((a, i) => a +i , 0);
}
const numbers2 = [1,2,3,5,4];
console.log(sum2(...numbers2));

// const a = numbers[0];
// const b = numbers[1];
const [a,b, ...other] = numbers2;//destructuri
console.log(a,b, other);

const person = {
    name: 'Peter',
    age: 42,
    city: 'Koln',
    country: 'Deutschland'
}
const {namw, age, ...adress} = person;
console.log(name, age, adress);

