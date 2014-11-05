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
    Lion.prototype = new Surrogate();
    Lion.prototype.roar = function(){
        console.log('roar!')
    }
})();