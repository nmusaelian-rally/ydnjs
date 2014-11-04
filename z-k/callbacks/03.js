function absurdTimes(numTimes, fn, complete) {
    var i = 0;
    function loop(){
        if (i == numTimes) {
            complete();
            return;
        }
        i += 1;
        fn(loop);
    }
    loop();
}
var readline = require('readline');
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addTwoNums (cb){
    reader.question('Enter num1:', function(numStr1){
        reader.question('Enter num2:', function(numStr2){
            var num1 = parseInt(numStr1);
            var num2 = parseInt(numStr2);
            cb(num1+num2);
        });
    });
}
var total = 0;
absurdTimes(3, function(cb) {
    addTwoNums(function(result){
        total += result;
        console.log('result: ', result);
        console.log('total:', total);
        
        cb();
    })
}, function(){
    console.log('done!', total);
    reader.close();
})

/*
Enter num1:1
Enter num2:1
result:  2
total: 2
Enter num1:2
Enter num2:2
result:  4
total: 6
Enter num1:3
Enter num2:3
result:  6
total: 12
done! 12
*/