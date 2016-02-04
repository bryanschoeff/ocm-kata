var assert = require("assert");
var ocr = require("../src/ocr");

describe('ocr', function() {
  describe('#parse', function () {
    it('should return an empty string when the input is empty', function () {
      assert.equal('', ocr.parse());
    });
  });
  describe('#tokenize', function () {
    it('should return zero for the first item from all zeros', function () {
      assert.equal(singleZero, ocr.tokenize(zeros)[0]); 
    });
  });
});


var singleZero =
' _ \n' +
'| |\n' +
'|_|\n' +
'   ';


var zeros = 
' _  _  _  _  _  _  _  _  _ \n' +
'| || || || || || || || || |\n' +
'|_||_||_||_||_||_||_||_||_|\n' +
'                           ';