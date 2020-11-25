//this
function hello() {
    console.log('Hallo', this);
}

hello();

const person = {
    name: ' Irina',
    age: 35,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.groupEnd();
        console.log(`Job is ${job}`);
        console.log(`phone is ${phone}`);

    }
}
console.log(person.logInfo());
console.log(person);
console.log(person.sayHello());

const ksenia = {
    name: 'Oksana',
    age: 18
}
//person.logInfo.bind(ksenia)();
const fnKseniaInfoLog =  person.logInfo.bind(ksenia, 'Frontend', '049-098-098-096')();
person.logInfo.bind(ksenia)();//1 sposob
person.logInfo.call(ksenia, 'Frontend', '049-098-098-096');//2 sposob glish commt
person.logInfo.apply(ksenia, ['Frontend', '049-098-098-096']);//3 sposob nur 2 parametrs

// ubungen wechseln nummerim array
const array = [1,2,3,4,5];
//1 sposob
function  multBy(arr,n) {
    return arr.map(function (i) {
        return i * n;
    });
}
console.log(multBy(array, 5));
//2 sposob
Array.prototype.multBy1 = function (n) {
    return this.map(function (i) {
        return i * n;
    });
    
} 
console.log(array.multBy1(20));