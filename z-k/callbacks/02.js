var readline = require('readline');

var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addTwoNums(cb){
    reader.question('Enter num 1:', function (numStr1){  
        reader.question('Enter num 2:', function (numStr2){
            var num1 = parseInt(numStr1);
            var num2 = parseInt(numStr2);
            cb(num1 + num2);
        })
    })
}

addTwoNums(function (result){
    console.log("Result: ", result);
    reader.close();
});