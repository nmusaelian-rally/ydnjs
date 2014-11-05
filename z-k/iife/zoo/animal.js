(function(){
    if (typeof Zoo === "undefined") {
        window.Zoo = {}
    }
    
    var Animal = Zoo.Animal = function(){
    }
    
    Animal.prototype.run = function(){
        console.log('fast')
    }
})();