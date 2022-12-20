const Pet = require('../src/pet');

describe('constructor',() => {
    it('returns an object', () => { 
        expect(new Pet ('Fido')).toBeInstanceOf(Object);
    });
});
// describe('returns a name from an instance - my test',() => {       
//     it('returns a name', () => {
//         expect(new Pet ('Fido')).toEqual({"name": "Fido"}); //this instance equals more than just name so errors.
//     });
// });
describe('constructor', () => {
    it('sets the name property', () => {
      const petOne = new Pet('Fido');
      expect(petOne.name).toEqual('Fido');
    });
});
describe('constructor', () => {
    it('has an initial age of 0', () => {
      const petOne = new Pet('Fido');
      expect(petOne.age).toEqual(0);
    });
});
describe('growUp', () => {
    it('increments the age by +1, hunger by +5 and fitness by -3', () => {
          const petOne = new Pet('Fido');
          petOne.growUp();
          expect(petOne.age).toEqual(1);
          expect(petOne.hunger).toEqual(5);
          expect(petOne.fitness).toEqual(7);
    });  
});
describe('walk', () => {
    it('increases the fitness by +4', () => {
          const petOne = new Pet('Fido');
          petOne.fitness = 4;
          petOne.walk();
          expect(petOne.fitness).toEqual(8);
    }); 
});
describe('feed', () => {
        it('decreases the hunger by 3', () => {
              const petOne = new Pet('Fido');
              petOne.hunger = 6;
              petOne.feed();
              expect(petOne.hunger).toEqual(3);
        });     
}); 
describe('walk', () => {
    it('increases the fitness to a MAX of 10', () => {
        const petOne = new Pet('Fido');
        petOne.fitness = 8;
        petOne.walk();
        expect(petOne.fitness).toEqual(10);
    }); 
});
describe('constructor', () => {
    it('has an initial hunger of 0', () => {
      const petOne = new Pet('Fido');
      expect(petOne.hunger).toEqual(0);
    });
});
describe('constructor', () => {
    it('has an initial fitness of 10', () => {
      const petOne = new Pet('Fido');
      expect(petOne.fitness).toEqual(10);
    });
});
describe('checkUp status', () => {
    it('checks the health of the pet', () => {
        const petOne = new Pet('Fido');
        petOne.fitness = 0;
        petOne.hunger = 1;
        expect(petOne.fitness <= 3 && petOne.hunger <=5).toBe(true);
        
        petOne.fitness = 4;
        petOne.hunger = 6;
        expect(petOne.hunger >= 5 && petOne.fitness >=3).toBe(true);
        
        petOne.fitness = 2;
        petOne.hunger = 6;
        expect(petOne.fitness <= 3 && petOne.hunger >=5).toBe(true);
       
        petOne.fitness = 4;
        petOne.hunger = 4;
        expect(petOne.fitness >= 3 && petOne.hunger <=5).toBe(true);
    }); 
});
describe('feed', () => {
    it('throws an error if the pet is not alive', () => {
        const petOne = new Pet('Fido');
        petOne.age = 30;
        expect(() => petOne.feed()).toThrow('Your pet is no longer alive!!');
        // expect(petOne.feed()).toThrow('Your pet is no longer alive :('); Correct way to use toThrow is to 
        // wrap function to be tested in another callback function so that jest can capture the error
    });
});
describe('walk', () => {
    it('throws an error if the pet is not alive', () => {
        const petOne = new Pet('Fido');
        petOne.fitness = -1;
        expect(() => petOne.feed()).toThrow('Your pet is no longer alive!!');
        // expect(petOne.feed()).toThrow('Your pet is no longer alive :('); Correct way to use toThrow is to 
        // wrap function to be tested in another callback function so that jest can capture the error
    });
});
describe('growUp', () => {
    it('throws an error if the pet is not alive', () => {
        const petOne = new Pet('Fido');
        petOne.age = 30;
        expect(() => petOne.feed()).toThrow('Your pet is no longer alive!!');
        // expect(petOne.feed()).toThrow('Your pet is no longer alive :('); Correct way to use toThrow is to 
        // wrap function to be tested in another callback function so that jest can capture the error
    });
});
describe('Child Adoption Success', () => {
    it('throws an error if the child is not alive', () => {
        const child = new Pet('Amelia');
        child.age = 30;
        expect(() => child.feed()).toThrow('Your pet is no longer alive!!');
    });
});
describe('Baby Born Success', () => {
    it('throws an error if the child is not alive', () => {
        const baby = new Pet('Billy');
        baby.age = 30;
        expect(() => baby.feed()).toThrow('Your pet is no longer alive!!');
    });
});