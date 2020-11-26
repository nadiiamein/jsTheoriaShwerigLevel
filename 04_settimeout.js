//setTimeOut
// $on('button', 'click', function () {
//     console.log('Button clicked')
// });

console.log('Start');
console.log('Start 2');
function timeout2sec() {
    console.log('temeout2sec');
}
window.setTimeout(function() {
    console.log('inside timeout, after 2000 seconds');
}, 5000);

setTimeout( timeout2sec, 2000);
console.log
('end')