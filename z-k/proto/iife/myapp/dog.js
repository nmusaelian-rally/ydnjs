(function(){
   if(typeof MyApp === "undefined"){
        window.MyApp = {};
   }
   
   var Dog = MyApp.Dog = function(name,leash){
        MyApp.Animal.call(this, name);
        this.leash = leash;
   }
   
   Dog.prototype = Object.create(MyApp.Animal.prototype);
   Dog.prototype.bark = function(){
        console.log('bark');
   }
})();