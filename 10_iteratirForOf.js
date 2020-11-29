//generator
function* strGenerator() {
    yield 'H',
    yield 'a',
    yield 'l',
    yield 'l',
    yield 'o'
}
const str = strGenerator();
console.log(str);
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());

function* numberGen (n = 10) {
    for(let i = 0; i < n; i++) {
        yield i;
    }
}
const num = numberGen(5);
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());

const iterator = {
    gen(n=10) {
        let i = 0;
        return{
            next() {
                if(i<n) {
                    return {value: ++i, done: false}
                }
                return { value: undefined, done: true}
            }
        }
    }
}

const itr = iterator.gen();

console.log(itr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());


for( let k of 'hello')
{
    console.log(k);
}

for( let k of [1,1,2,3,5,8,13])
{
    console.log(k);
}


const iterator1 = {
[Symbol.iterator](n=10) {
      let i = 0;
        return{
            next() {
                if(i<n) {
                    return {value: ++i, done: false}
                }
                return { value: undefined, done: true}
            }
        }
    }
}
for( let k of iterator1)
{
    console.log(k);
}

function* iter(n=10) {
    for (let i =0; i < n; i++) {
        yield i;

    }
}

for (let k of iter(6)) {
    console.log(k);
}