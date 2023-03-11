const MAX_FITNESS = 10
const MIN_HUNGER = 0

const GROWUP_HUNGER_FACTOR = 5
const GROWUP_FITNESS_FACTOR = 3
const GROWUP_AGE_FACTOR = 1
const WALK_FITNESS_FACTOR = 4
const FEED_HUNGER_INCREMENT = 3

class Pet {
    constructor(name) {
        this.name = name; 
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
        this.children = [];
    }
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    } 
}
   
    Pet.prototype.adoptChild = function (child) {
        if (!this.isAlive) {
            throw new Error('Your child pet is no longer alive!!');
        }
        this.children.push(child);
    }
    Pet.prototype.haveBaby = function (baby) {
        if (!this.isAlive) {
            throw new Error('Your baby pet is no longer alive!!');
        }
        this.children.push(baby);
    }
    Pet.prototype.growUp = function () {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive!!');
        }
        this.age += GROWUP_AGE_FACTOR;
        this.hunger += GROWUP_HUNGER_FACTOR;
        this.fitness -= GROWUP_FITNESS_FACTOR;
    }
    Pet.prototype.walk = function () {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive!!');
        }
        if ((this.fitness + WALK_FITNESS_FACTOR) <= MAX_FITNESS) {
            this.fitness += WALK_FITNESS_FACTOR;
        }
            else {
            this.fitness = MAX_FITNESS;
        }
    }
    Pet.prototype.feed = function () {
       console.log(this.age < 30 && this.hunger < 10 && this.fitness > 0)
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
                          
const pet = new Pet('Fido');      
const parent = new Pet('Dave');   
const child = new Pet('Amelia');
const baby = new Pet('Billy');
parent.adoptChild(child);
parent.haveBaby(baby);

module.exports = Pet;
