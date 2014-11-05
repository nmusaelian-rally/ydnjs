//lion.js exports Lion class by making it a property of window.Zoo. Zoo is set at a global level (window) so other js code can access window.Zoo.Lion
//which is also Zoo.Lion for short. That's what js code in app.html does.

(function (){
    if (typeof Zoo === "undefined") {
        window.Zoo = {};
    }
    
    var Lion = Zoo.Lion = function(){
        
    };
    
    function Surrogate(){};
    //Surrogate.prototype = Animal.prototype; //will cause Uncaught ReferenceError: Animal is not defined 
    Surrogate.prototype = Zoo.Animal.prototype;
    Lion.prototype = new Surrogate(); //set Lion prototype to Surrogatge instance
    Lion.prototype.roar = function(){
        console.log('roar!')
    }
})();

/*
 Lion.prototype.__proto__ must be Animal.prototype, so we can call Animal methods on a Lion
Constructing Lion.prototype must not involve calling the Animal constructor function
This is done via a third class usually called Surrogate.
The reason why we don't just call Lion.prototype=Animal.prototype is because we dont want that any function added to Lion to be added to Animal,
e.g. roar() should exist on Lion only.
 */