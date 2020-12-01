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

 