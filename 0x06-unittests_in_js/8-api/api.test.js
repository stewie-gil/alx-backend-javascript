#!/usr/bin/env node

const assert = require('assert');
const sinon = require('sinon');
const app = require('./api');

const request = supertest(app);


describe('testing express app', ()=>{
    it('should return correct status code',(done)=> {
	request
	    .get('/')
	    .expect(200)
	    .end((err, res) => {
		if(err) return done(err);
		assert.strictEqual(res.text, 'Welcome to the payment system');
		done();
	    });
    });

    it('should respond with a 404 satus for unkown route',(done) => {
	request
	    .get('/unknown-route')
	    .expect(404, done);
    });



});
