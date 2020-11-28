//async await
const delay = ms => {
    return new Promise (r => setTimeout(() => r(), ms )
    )}
    delay(2000).then(() => console.log('2 sec'));

    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    function fetchTodoos() {
        console.log ('Fetch todo started...');
        return delay(2000)
        .then(() => fetch(url))
        .then(response => response.json());
    }
    fetchTodoos() //1 sposob ohne async
    .then(data => {
        console.log('Data:', data)
    })
    .catch(e => console.error(e));//error suchen


    async function fetchAsyncTodos() {//2 sposob mit async
        console.log('Fetch todo started...');
        try {//error suchen
            await delay(2000);
            const response = await fetch(url);
            const data =await response.json();
            console.log('Data:', data)
        } catch (e) {
console.error(e);
        } finally {
            
        }
        

    }
    fetchAsyncTodos() ;