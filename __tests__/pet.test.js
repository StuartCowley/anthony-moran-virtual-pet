const Pet = require('../src/pet');

describe('constructor',() => {
    it('returns an object', () => { 
        expect(new Pet ('Fido')).toBeInstanceOf(Object);
    });
});

describe('returns a name from an instance - my test',() => {
    it('returns a name', () => {
        expect(new Pet ('Fido')).toEqual({"name": "Fido"});
    });
});
describe('constructor', () => {
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
  });