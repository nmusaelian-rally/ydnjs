function Dog(){};

Dog.prototype.bark = function(){
    console.log('bark');
}

module.exports = Dog;
//Node has 'module', which has 'exports' property, which is what 'require' returns