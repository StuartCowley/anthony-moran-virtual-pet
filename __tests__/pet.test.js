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