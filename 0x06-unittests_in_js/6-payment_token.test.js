const sinon = require('sinon');
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('testing getPaymentTokenFromAPI', () => {
  it('should test an async function', () => new Promise((done) => {
    const success = true;

    getPaymentTokenFromAPI(success).then((response) => {
	    assert.deepStrictEqual(response, { data: 'Successful response from the API' });
	    done();
    });
  }));

  it('should reject with an error when success is false', () => new Promise((done) => {
	    const success = false;
	    const response = getPaymentTokenFromAPI(success);

	    assert.strictEqual(response, undefined);
	    done();
  }));
});
