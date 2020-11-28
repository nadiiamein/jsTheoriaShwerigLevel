// Proxy
//object
const person = {
    name: 'Nadiia',
    age: 35,
    job: 'frontend'
};
const op = new Proxy(person, {
    get(target, prop ) {
       // console.log(`Cetting prop ${prop}`);
        if (!(prop in target)) {
             return prop
             .split('_')
             .map(p => target[p])
             .join(' ')
        }
        return target[prop];
    },
    set(target, prop, value) {
        if(prop in target) {
            target[prop] = value;
        } else {
            throw new Error (`No ${prop} field in target`)
        }
    },
    has(target, prop) {//method sucht od elemrnt gibt in obj
        return ['age', 'job'].includes(prop);
    },
    deleteProperty(target, prop) {
        console.log('Deleting ...', prop);
        delete target[prop];
        return true;

    }

});

op.age = 26;
console.log(op.age);
console.log(op);
console.log(delete op.age);
console.log(op);
console.log(op.age_name);
console.log(op.name_age_job);

// function
const log = text => `Log: ${text}`;
const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn...');
        return target.apply(thisArg, args). toUpperCase();
    }
});

console.log(fp('masasasa'));
console.log(fp);

//classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age

    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) 
    {
        console.log('construct....');
        return new Proxy (new target(...args), {
get(t, prop)
{console.log(`Getting prop "${prop}"`);

}
        });
    }
});

const p = new PersonProxy('Peter', 42);
console.log(p);

