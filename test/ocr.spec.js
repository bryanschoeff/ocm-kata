var assert = require("assert");
var ocr = require("../src/ocr");

describe('ocr', function() {
  describe('#parse', function () {
    it('should return an empty string when the input is empty', function () {
      assert.equal('', ocr.parse());
    });
  });
});