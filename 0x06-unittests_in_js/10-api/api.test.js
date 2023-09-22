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

    it('should return 200 status code for digit values', (done) => {
        request.get('http://localhost:7865/cart/12', (error, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });

    
    it('should return the correct response for a cart', (done) => {
	request.get('http://localhost:7865/cart/12', (error, res, body) => {
	    expect(body).to.be.equal('Payment methods for cart 12');
	    done();
	});

    })

    it('should return 404 status code for non digit values', (done) => {
	request.get('http://localhost:7865/cart/b', (error, res, body) => {
	    expect(res.statusCode).to.be.equal(404);
	    done();
	});

    });

    it('should test the status code of the login route', (done) => {
	request.post('http://localhost:7865/login', (error, res, body) => {
	    expect(res.statusCode).to.be.equal(200);
	    done();
	} );
    });

	it('should return Welcome username', (done) => {
	    request.post('http://localhost:7865/login', {json: {userName: 'Stewie'}} , (error, res, body) => {
		expect(body).to.be.equal(`Welcome Stewie`);
		done();

	    });	 
	});
    it('should test the available payments route', (done) => {
	request.get('http://localhost:7865/available_payments', (error, res, body) => {
	    expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();

	} );

    });

   
    
});
