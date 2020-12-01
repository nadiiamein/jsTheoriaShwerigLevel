//Weakset
const users = [
    {name: 'Peter'},
    {name: 'Alex'},
    {name: 'Itina'}
]

const visits = new WeakSet();
visits.add(users[0]).add(users[1]);
users.splice(1, 1);//delete element
console.log(visits.has(users[0]));
console.log(visits.has(users[1]));