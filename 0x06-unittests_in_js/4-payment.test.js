#!/usr/bin/env node

const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('testing sendPaymentRequestToApi', () => {
  it('should use the calculateNumber of Utils', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleLogSpy = sinon.spy(console, 'log');

    // const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');

    consoleLogSpy.restore();
    calculateNumberStub.restore();
  });
});
