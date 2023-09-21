#!/usr/bin/env node

const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('testing sendPaymentRequestToApi', () => {
  let consoleLogSpy;
  beforeEach(() => {
    const consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should use the calculateNumber of Utils', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is 120');
    // sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    // sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
    calculateNumberStub.restore();
  });

  it('should', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(20);

    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 20');
    calculateNumberStub.restore();
  });
});
