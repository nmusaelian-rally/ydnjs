//lion.js exports Lion class by making it a property of window.Zoo. Zoo is set at a global level (window) so other js code can access window.Zoo.Lion
//which is also Zoo.Lion for short. That's what js code in app.html does.

(function (){
    if (typeof Zoo === "undefined") {
        window.Zoo = {};
    }
    
    var Lion = Zoo.Lion = function(age){
        Zoo.Animal.call(this,age);          //we call Animal.call, not new Animal() because inside Lion we don't want to construct a whole new Animal
        //we just want to run the Animal initialization logic on the current Lion instance.
        //That's why we call the Animal constructor while setting 'this' to the current Lion instance.
        //This pattern is used when superclass has initialization code.
    };
    
    function Surrogate(){};
    //Surrogate.prototype = Animal.prototype; //will cause Uncaught ReferenceError: Animal is not defined 
    //Surrogate.prototype = Zoo.Animal.prototype;
    //Lion.prototype = new Surrogate(); //set Lion prototype to Surrogatge instance
    Lion.prototype = Object.create(Zoo.Animal.prototype);
    Lion.prototype.roar = function(){
        console.log('roar!')
    }
})();

/*
 Lion.prototype.__proto__ must be Animal.prototype, so we can call Animal methods on a Lion
Constructing Lion.prototype must not involve calling the Animal constructor function
This used to be done via a third class traditionally called Surrogate.
The reason why we don't just call Lion.prototype=Animal.prototype is because we dont want that any function added to Lion to be added to Animal,
e.g. roar() should exist on Lion only.

As of ECMAScript 5 we don"t have to use Surrogate. Object.create returns new obj with its __proto__ set to its first argument.
 */