/* eslint-disable no-undef */
const { assert } = require('chai');

describe('Mocha', () => {
  describe('Mocha with Chai is running', (done) => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
