const obj = {
    name: 'Nadiia',
    age: 34,
    job: 'Fullstack'
}

const entries = [
    ['name', 'Nadiia'],
    ['age', 34],
    ['job', 'Fillstack']
]

console.log(Object.entries(obj));
console.log(Object.fromEntries(entries));

const map = new Map(entries)
map
.set('newField', 42)
.set(obj, 'Value of object')
.set(NaN, 'Nan ??')

console.log(map);

//map.delete('job');//delete el
console.log(map.has('job'));//koken ob el delede? return false oder tue
console.log(map.size);//velche grosse
//map.clear();//putz map
//console.log(map.size);//koken grosse

//for of
for (let [key, value] of map) {
    console.log(key, value);
}
for (let val of map.values() ){
    console.log(val);
}
for (let key of map.keys()) {
    console.log(key);
}
map.forEach((val, key, m) => {
    console.log(val, key)
})

//
const array1 = [...map]//1 method
console.log(array1);

const array =Array.from(map);//2 method
const mapObj = Object.fromEntries(map.entries())
console.log(array);

const users = [
    {name: 'Peter'},
    {name: 'Alex'},
    {name: 'Maks'}
]
const visits = new Map();
visits 
.set(users[0], new Date())
.set(users[1], new Date(new Date().getTime() + 1000 * 60))
.set(users[2], new Date(new Date().getTime() + 5000 * 60))


function lastVisit(user) {
    return visits.get(user);
}
console.log(lastVisit(users[2]));
