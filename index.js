//Set obj method
const set = new Set ([1,2,3,3,4,5,5,6])
console.log(set);

set.add(10).add(20).add(30).add(20);
console.log(set);
console.log(set.size);
console.log(set.has(20));
console.log(set.has(42));
console.log(set.delete(1));
console.log(set.size);
//console.log(set.clear());
console.log(set.size);

console.log(set.keys());
console.log(set.values());
console.log(set.entries());
for(let key of set) {
    console.log(key);
}

//practika

function uniqValues(array) {
   // return [...new Set (array)]//1 mothod
   return Array.from(new Set(array));//2 mothod
}

console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 4, 5, 6, 6, 6,]));