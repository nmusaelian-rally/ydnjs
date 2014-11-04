function Cat(){};

Cat.prototype.meow = function(){
    console.log('meow');
}

module.exports = Cat;
//Node has 'module', which has 'exports' property, which is what 'require' returns