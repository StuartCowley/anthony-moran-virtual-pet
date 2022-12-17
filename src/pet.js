class Pet {
    constructor(name) {                         //this is a constructor function 
        this.name = name;                       //introducing 'this' 
    }
}
const petOne = new Pet('Fido');                 //note capital P in Pet which references the class 'Pet'
const petTwo = new Pet('Rover');                //passing the Rover argument into the name variable on line 2
const petThree = new Pet('Gnasher');

module.exports = Pet;

// This is constructor function
// function Pet(name) {
//     this.name = name
// }
// const pet = new Pet('Fido');

// module.exports = Pet;