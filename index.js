 // function zamik
 function createCalcFunction (n) {
     return function() {
         console.log(100 * n);
     }
 }

 const calc = createCalcFunction(42);
 calc();

 function createIncrementor(n) {
     return function(num) {
return n + num;
     }
 }
 const addOne = createIncrementor(1);
 const addTen = createIncrementor(10);
 console.log(addOne(10));
 console.log(addTen(41));
 console.log(addTen(42));

 function urlGenerator(domian) {
     return function(url) {
         return `https://${url}.${domian}`
     };
 }

 const comUrl = urlGenerator('com');
 console.log(comUrl('google'));
 const ruUrl= urlGenerator('ru');
 console.log(ruUrl('vkontakte'));

 //ubungen shreiben function bind
 function bind(context, fn) {
    return function(...args) {
        fn.apply(context,args)
    }
};
 function logPerson() {
     console.log(`person: ${this.name}, ${this.age}, ${this.job} `)
 }
 const person1= { name: 'Peter', age: 21, job: 'frontend'};
 const person2= { name: 'Paola', age: 20, job: 'beckend'};

 bind(person1, logPerson)();
 bind(person2, logPerson)();

 
