const chai=require('chai');
const assert=chai.assert;
const should= chai.should();
const expect= chai.expect;
const division= require ('../division');

describe('division', function() {
    it('retornara el conciente estre 2 numeros positivos', function() {
      assert.equal(division(6, 2), 3);
      expect(division(10, 5)).to.equal(2);
      division(8, 4).should.equal(2);
    });
  
    it('retorna el cociente entre un positivo y un negativo', function() {
      assert.equal(division(6, -2), -3);
      expect(division(10, -5)).to.equal(-2);
      division(8, -4).should.equal(-2);
    });
  
    it('retorna el cociente estre 2 negaticvos', function() {
      assert.equal(division(-6, -2), 3);
      expect(division(-10, -5)).to.equal(2);
      division(-8, -4).should.equal(2);
    });
  
    it('error al dividir en cero', function() {
      assert.throws(() => division(6, 0), Error);
      expect(() => division(10, 0)).to.throw('Division by zero');
      (() => division(8, 0)).should.throw('Division by zero');
    });

    it('dividir dos decimales', () => {
        assert.equal(division(1.5, 0.5), 3);
        expect(division(1.5, 0.5)).to.equal(3);
        division(1.5, 0.5).should.equal (3);
      });
  });

