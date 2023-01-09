// Taran Roth, pd. 7-8 Even, Level 8: Blocking and Non Blocking Code

var fs = require('fs');

// Sync
var data = fs.readFileSync('input.txt');
console.log(data.toString());


// Async
fs.readFile('input.txt', (err, data) => {
    if (err) return console.err(err);
    console.log(data.toString());
})

console.log('Program Ended');
