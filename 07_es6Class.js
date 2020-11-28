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
});
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

    get ageInfo() {
        return this.age * 7;
    }

    set ageInfo(newAge){
        this.age = newAge;
    }
}


const cat = new Cat ({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
});
console.log(cat);
console.log(cat.voice());
cat.ageInfo = 8;
console.log(cat.ageInfo);


//praktika
class Component {
    constructor (selector) {
        this.$el = document.querySelector(selector)
    }
    hide() {
        this.$el.style.display = 'none';

    }
    show() {
        this.$el.style.display = 'block';
    }
}
class Box extends Component {
    constructor(options) 
    {
        super(options.selector)

        this.$el.style.width =this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;
    }
}

const box1 = new Box ({
    selector: '#box1',
    size: 100,
    color: 'red'
})

console.log(box1.hide());//wurfel werschmunden
console.log(box1.show()); //quadrat zeigen

const box2 = new Box ({
    selector: '#box2',
    size: 120,
    color: 'yellow'
})
console.log(box2.hide());//wurfel werschmunden
console.log(box2.show());

class Circle extends Box {
    constructor(options){
        super(options)
        this.$el.style.borderRadius = '50%';
    }
}

const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green'
}) 