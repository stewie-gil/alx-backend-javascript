const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber Function (added functions)', () => {
  it('calculate sum', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    assert.strictEqual(result, 6);
  });

  it('divide', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.strictEqual(result, 0.2);
  });

  it('subtract', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    assert.strictEqual(result, -4);
  });

  it('should test divide with a zero', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    assert.strictEqual(result, 'Error');
  });
});
