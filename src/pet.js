const MAX_FITNESS = 10
const MIN_HUNGER = 0

const GROWUP_HUNGER_FACTOR = 5
const GROWUP_FITNESS_FACTOR = 3
const GROWUP_AGE_FACTOR = 1
const WALK_FITNESS_FACTOR = 4
const FEED_HUNGER_INCREMENT = 3

class Pet {
    constructor(name) {
        //Introducing the 'this' function
        this.name = name; 
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
    }
};
    Pet.prototype = {
        get isAlive() {
            return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        } 
    };
    //"The GETTER METHOD should go after the CONSTRUCTOR FUNCTION DEFINITION but before the first METHOD DEFINITION" 

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
    }
    Pet.prototype.feed = function () {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive!!');
        }
        if (this.hunger >= FEED_HUNGER_INCREMENT) {
            this.hunger -= FEED_HUNGER_INCREMENT;
        }
        else {
        this.hunger = MIN_HUNGER;
        }
    }
    //If above 5, the pet is hungry. The hunger score goes down when fed.
    Pet.prototype.checkUp = function () { 
        if (this.fitness <= 3 && this.hunger <=5 ) {
            console.log('I need a walk!');
            }
            else if (this.hunger >= 5 && this.fitness >= 3) {
            console.log('I am hungry!');
            }
            else if (this.fitness <= 3 && this.hunger >=5) {
            console.log('I am hungry and I need a walk!');
            }
            else if(this.fitness >= 3 && this.hunger <=5) {
            console.log('I feel great!');
            }
        }                      
// const petOne = new Pet('Fido');          //1st instance. //note capital P in Pet which references the class 'Pet'
// const petTwo = new Pet('Rex');           //2nd instance. //passing the Rex argument into the name variable on line 2
// const petThree = new Pet('Rover');

module.exports = Pet;

// This is constructor function
// function Pet(name) {
//     this.name = name
// }
// const pet = new Pet('Fido');

// module.exports = Pet;