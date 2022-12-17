const MAX_FITNESS = 10
const GROWUP_HUNGER_FACTOR = 5
const GROWUP_FITNESS_FACTOR = 3
const GROWUP_AGE_FACTOR = 1
const WALK_FITNESS_FACTOR = 4


class Pet {
    constructor(name) {
        {
            this.name = name; //introducing 'this' function
            this.age = 0;
            this.hunger = 0;
            this.fitness = 10;
        }
        Pet.prototype.growUp = function () {
            this.age += GROWUP_AGE_FACTOR;
            this.hunger += GROWUP_HUNGER_FACTOR;
            this.fitness -= GROWUP_FITNESS_FACTOR;
        }
        Pet.prototype.walk = function () {
            if ((this.fitness + WALK_FITNESS_FACTOR) <= MAX_FITNESS) {
                this.fitness += WALK_FITNESS_FACTOR;
            }
                else {
                this.fitness = MAX_FITNESS;
            }
        };
    }
}
const petOne = new Pet('Fido');            //1st instance. //note capital P in Pet which references the class 'Pet'
const petTwo = new Pet('Rex');           //2nd instance. //passing the Rover argument into the name variable on line 2
const petThree = new Pet('Rover');

module.exports = Pet;

// This is constructor function
// function Pet(name) {
//     this.name = name
// }
// const pet = new Pet('Fido');

// module.exports = Pet;