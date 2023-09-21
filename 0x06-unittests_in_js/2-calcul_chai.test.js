const chai = require('chai');

const { expect } = chai;
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber Function (Chai Tests)', () => {
  it('calculate sum', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    expect(result).to.equal(6);
  });

  it('divide', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(result).to.equal(0.2);
  });

  it('subtract', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(result).to.equal(-4);
  });

  it('should test divide with a zero', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    expect(result).to.equal('Error');
  });
});
