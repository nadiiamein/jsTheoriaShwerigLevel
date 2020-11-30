//Weakmap
let obj = {name: 'weakmap'};
//const arr = [obj]
//obj = null;
//console.log(obj);
//console.log(arr[0]);

const map = new WeakMap ([
    [obj, 'obj data']]);

    // methodi === get, set, delete, has
    console.log(map.has(obj));
    obj = null;
    console.log(map.get(obj));
    console.log(map.has(obj));

    const cache = new WeakMap();
function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let peter =  {name: 'Peter'};
let alex = {name: 'Alex'};

cacheUser(peter);
cacheUser(alex);
lena = null;
console.log(cache.has(peter));
console.log(cache.has(alex));
