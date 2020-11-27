//object set get
const person = Object.create (
    {
        calculateAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear);
        }
    },
    {
    name: {
        value:'Josef',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 1999,
        enumerable: false,
        writable: false,
        configurable: false

    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear;
        },
        set(value) {
            document.body.style.background = 'pink'
            console.log('Set age', value);
        }
    }
}
);
console.log(person);
person.name = 'Peter';


for( let key in person ){
    if(person.hasOwnProperty(key)) {
    console.log('key', key, person[key]);
    }
}
delete person.name;
console.log(person);
console.log(person.age);
person.age = 100;
person.calculateAge();