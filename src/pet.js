class Pet {
    constructor(name, age) {                         //this is a constructor function 
        this.name = name;                       //introducing 'this' 
        this.age = 0;
    }
    Pet.prototype.growUp = function() {
      this.age += 1;
    };
}
const petOne = new Pet('Fido');            //1st instance. //note capital P in Pet which references the class 'Pet'
const petTwo = new Pet('Rover');           //2nd instance. //passing the Rover argument into the name variable on line 2
const petThree = new Pet('Gnasher');

module.exports = Pet;

// This is constructor function
// function Pet(name) {
//     this.name = name
// }
// const pet = new Pet('Fido');

// module.exports = Pet;