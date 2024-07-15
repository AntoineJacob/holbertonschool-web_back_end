// 4-payment.test.js

const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;
  let calculateNumberStub;

  beforeEach(function() {
    // Stub Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore stub and spy
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should stub Utils.calculateNumber and verify console.log message', function() {
    sendPaymentRequestToApi(100, 20);

    // Verify Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 100, 20);

    // Verify console.log was called with the correct message
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 10');
  });
});
