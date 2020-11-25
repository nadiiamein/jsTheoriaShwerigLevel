//prototype

// const person = {
//     name: 'Treffen',
//     age : 34,
//     greet: function (){
//         console.log('Greet');
//     }
// }
const person =  new Object({
    name: 'Treffen',
    age : 34,
    greet: function (){
        console.log('Greet');
    }
});
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.greet());
console.log(person.toString);//prototype

Object.prototype.sayHallo = function () {console.log('Hallo!')};
console.log(person.sayHallo());
    
const lena = Object.create(person);
console.log(lena);
console.log(lena.greet);
lena.name ='Elena';
console.log(lena);
const str = 'I am string';
console.log(str.sayHallo());