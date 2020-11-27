//ES6 class

// const animal = {
//     name: 'Animsl',
//     age: 5,
//     hasTail: true
// }

class Animal {

    static type = 'ANIMAL';//value
    constructor (options) {//constructor class
        this.name = options.name
        this.age = options.age
        this.hasTeil = options.hasTeil

    }
    voice() {//method
        console.log('I am Animal')
    }
}

const animal = new Animal({
    name: 'Anumal',
    age: 5,
    hasTeil: true
})
console.log(animal);

console.log(animal.voice());

console.log(animal.type);//geht nicht
console.log(Animal.type)//richtig

class Cat extends Animal {
    static type = 'CAT';
    constructor(options) {
        super(options);
        this.color = options.color
    }
    voice() {
        super.voice();
        console.log('I am cat');
    }

    get age
}

const cat = new Cat ({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
});
console.log(cat);
console.log(cat.voice());