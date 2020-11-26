// Promise
// ohne promis 
 console.log('Request data....');
//  setTimeout(() => {
//      console.log('PREPARING DATA...');

//      const backendData = {
//          server: 'qwe',
//     port: 2000,
// status: 'working'
// }
// setTimeout ( () => { 
// backendData.modified = true;
// console.log('Data received', backendData);
// }, 2000);
//  },2000);
//mit promis

const p = new Promise(function (resolve,reject) {
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'swe',
            port: 2000,
            status: 'working'
        }
        resolve(backendData);
    },2000 );
});

p.then(data => {
    //console.log('Promise resolved',data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true ;
            //reject(data)//fur error
            resolve(data);
        }, 2000);
    });
    // p2.then(clientData => {
    //     console.log('Data received', clientData)
    // });
})
.catch(err => console.log('Error', err))
.then(clientData => {
     console.log('Data received', clientData);
     clientData,fromPromise = true;
     return clientData;
}).then(data => {
    console.log('Modified', data);
})
.finally(() => console.log('Finaly'));


const sleep = ms  => {  return new Promise(resolve => {

    setTimeout(() => resolve(), ms)
});
};
sleep(2000).then(() => console.log('After 2 sec'));
sleep(3000).then(() => console.log('After 3 sec'));

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
});
Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
});

