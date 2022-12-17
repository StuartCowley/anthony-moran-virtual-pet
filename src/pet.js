class Pet {
    constructor(name) {
        {
            this.name = name; //introducing 'this' function
            this.age = 0;
            this.hunger = 0;
            this.fitness = 10;
        }
        Pet.prototype.growUp = function () {
            this.age += 1;
            this.hunger += 5;
            this.fitness -= 3;
        }
        Pet.prototype.walk = function () {
            this.fitness += 4;
        };
    }
}
const petOne = new Pet('Fido');            //1st instance. //note capital P in Pet which references the class 'Pet'
const petTwo = new Pet('Rex');           //2nd instance. //passing the Rover argument into the name variable on line 2
const petThree = new Pet('Gnasher');

module.exports = Pet;

// This is constructor function
// function Pet(name) {
//     this.name = name
// }
// const pet = new Pet('Fido');

// module.exports = Pet;