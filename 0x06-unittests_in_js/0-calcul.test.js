const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('addition Function', () => {
  it('should the sum of two positive numbers', () => {
    const result = calculateNumber(2, 3);
    assert.strictEqual(result, 5);
  });

  it('should return the sum decimal positive numbers', () => {
    const result = calculateNumber(3.5, 2.7);
    assert.strictEqual(result, 7);
  });

  it('should return sum of negative numbers', () => {
    const result = calculateNumber(-1.8, -2.4);
    assert.strictEqual(result, -4);
  });

  it('should return sum of calculate a positive and negative no.', () => {
    const result = calculateNumber(-4, 5);
    assert.strictEqual(result, 1);
  });

  it('should return zero for zero iputs', () => {
    const result = calculateNumber(0, 0);
    assert.strictEqual(result, 0);
  });
});
