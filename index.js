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


//wrapper practika
const withDefaultValue = (target, defaultValue = 0) =>
 {return new Proxy(target, { get: (obj, prop) => (
prop in obj ? obj[prop] : defaultValue)
})
 }

const position = withDefaultValue({
    x: 24,
    y: 42
},
0);
console.log(position);
console.log(position.x);//gibt se im position
console.log(position.z);//gibt es nicht

// Hidden properies
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
has: (obj, prop) => prop in obj && !prop.startsWith(prefix),   ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
get: (obj,prop, receiver) => (prop in receiver ? obj[prop] : void 0)       
    })
}

const data = withHiddenProps({
    name: 'Wartenmal',
    age: 30,
    _uid: '235609'
});
console.log(data.name);
console.log(data._uid);
'uid' in data;//false
for (let key in data) {
  console.log(key);
}
console.log(Object.keys.data);

//Optimization

const userData = [
    {id: 1, name: 'Peter', job: 'Fullstack', age: 90},
    {id: 2, name: 'Fredsa', job: 'Frontend', age: 25},
    {id: 3, name: 'Awumm', job: 'Backend', age: 21},
    {id: 4, name: 'Wegwhh', job: 'Recruter', age: 23}

]

console.log(userData.find(user => user.id ===3));//1 metod tradiconal mit find()

const IndexeArray = new Proxy(Array, {//2 metod mit Proxy
    construct (target, [args]) {
        const index ={}
        args.forEach(item => (index[item.id] = item))

        return new Proxy(new target(...args), {
        get(arr, prop) {
            switch (prop) {
                case 'push':
                    return item => {
                        index[item.id] = item 
                        arr[prop].call(arr, item)
                    };
                    case 'findById':
                    return id => index[id];
                    default:
                        return arr[prop];

            }
        }
    })
    }
})


const users = new IndexeArray([    {id: 1, name: 'Peter', job: 'Fullstack', age: 90},
{id: 2, name: 'Fredsa', job: 'Frontend', age: 25},
{id: 3, name: 'Awumm', job: 'Backend', age: 21},
{id: 4, name: 'Wegwhh', job: 'Recruter', age: 23}
])


console.log(users.findById(2));
console.log(users.findById(22));