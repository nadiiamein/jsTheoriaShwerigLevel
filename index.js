// Promise
 console.log('Request data....');
 setTimeout(() => {
     console.log('PREPARING DATA...');

     const backendData = {
         server: 'qwe',
    port: 2000,
status: 'working'
}
setTimeout ( () => { 
backendData.modified = true;
console.log('Data received', backendData);
}, 2000);
 },2000);
