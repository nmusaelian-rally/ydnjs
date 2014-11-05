(function(){
    if (typeof Zoo === "undefined") {
        window.Zoo = {}
    }
    
    var Animal = Zoo.Animal = function(age){
        this.age = age;
    }
    
    Animal.prototype.run = function(){
        console.log('fast')
    }
})();