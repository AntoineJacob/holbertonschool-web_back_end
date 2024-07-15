// 5-payment.test.js

const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
    let log;

    beforeEach(function() {
        log = sinon.spy(console, 'log');
    });
    afterEach(function() {
        log.restore();
    });

    it('Checks 100 + 20', function() {
        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledOnce(log);
        sinon.assert.calledWith(log, 'The total is: 120');
    });
    it('Checks 10 + 10', function() {
        sendPaymentRequestToApi(10, 10);

        sinon.assert.calledOnce(log);
        sinon.assert.calledWith(log, 'The total is: 20');
    });
});