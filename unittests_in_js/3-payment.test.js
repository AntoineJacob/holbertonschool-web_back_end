const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it('Validates the usage of the Utils function', function() {
        const test = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        test.restore();
        sinon.assert.calledOnce(test);
        sinon.assert.calledWith(test, 'SUM', 100, 20);
    });
});