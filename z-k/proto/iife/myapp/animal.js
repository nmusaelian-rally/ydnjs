(function(){
    if (typeof MyApp === "undefined") {
        window.MyApp = {};
    }
    
    var Animal = MyApp.Animal = function(name){
        this.name = name;
    }
    
    Animal.prototype.sayHi = function(){
        console.log('Hi, my name is ' + this.name);
    }
})();