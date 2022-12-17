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
describe('growUp', () => {
        it('increments the age by 1', () => {
          const petOne = new Pet('Fido');
          pet.growUp();
          expect(pet.age).toEqual(1);
        });
      }); 
});