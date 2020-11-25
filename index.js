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
person.logInfo.bind(ksenia)();
const fnKseniaInfoLog =  person.logInfo.bind(ksenia, 'Frontend', '049-098-098-096');
fnKseniaInfoLog();