const request = require('request');
const {expect} = require('chai');

describe('Testing api', () => {
const url = 'http://localhost:7865';

it('should return correct response for root', (done) => {
    request.get(`${url}`, (error, res, body) => {
expect(body).to.be.equal('Welcome to the payment system');
done();

});
});
it('should return the right status code', (done) => {
	request.get(`${url}`, (error, res, body) => {
	    expect(res.statusCode).to.be.equal(200);
	    done();
	});
});

});
