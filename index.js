//localStorage
const myNumber = 42;
// localStorage.removeItem('number');//delete el
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number', myNumber.toString());
// console.log(localStorage.getItem('number'));
// localStorage.clear();//putz alles
const object = {
    name: 'Peter',
    age: 22
}
//localStorage.setItem('person', JSON.stringify(object));

const raw = localStorage.getItem('person');
const person = JSON.parse(raw);
person.name = 'Petrson';
//console.log(person);

///
window.addEventListener('storage', event => {
    console.log(event);
});
const shreib = localStorage.setItem('temp', Date.new()).toString()
console.log(shreib);