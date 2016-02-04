var expect = require("chai").expect;
var ocr = require("../src/ocr");

describe('ocr', function () {
    describe('#parseFile', function () {
        it('should return the parsed versions of multiple numbers for a file', function () {
            var input = [zeros,
                threes,
                fours,
                sevens,
                nines].join('\n');

            var expectedFile = ['000000000',
                '333333333',
                '444444444',
                '777777777',
                '999999999'].join('\n');


            expect(expectedFile).to.eql(ocr.parseFile(input));
        });
    });
    describe('#parse', function () {
        it('should return 000000000 when the all zeros are passed', function () {
            expect('000000000').to.eql(ocr.parse(zeros));
        });
        it('should return 111111111 when the all ones are passed', function () {
            expect('111111111').to.eql(ocr.parse(ones));
        });
        // this is enough to convince me right now
    });
    describe('#tokenize', function () {
        it('should return zero for items from all zeros', function () {
            expect(singleZero).to.eql(ocr.tokenize(zeros)[0]);
            expect(singleZero).to.eql(ocr.tokenize(zeros)[8]);
            expect(singleZero).to.eql(ocr.tokenize(zeros)[3]);
        });
        it('should return one for items from all ones', function () {
            expect(singleOne).to.eql(ocr.tokenize(ones)[0]);
            expect(singleOne).to.eql(ocr.tokenize(ones)[8]);
            expect(singleOne).to.eql(ocr.tokenize(ones)[3]);
        });
        it('should return two for items from all twos', function () {
            expect(singleTwo).to.eql(ocr.tokenize(twos)[0]);
            expect(singleTwo).to.eql(ocr.tokenize(twos)[8]);
            expect(singleTwo).to.eql(ocr.tokenize(twos)[3]);
        });
        it('should return three for items from all threes', function () {
            expect(singleThree).to.eql(ocr.tokenize(threes)[0]);
            expect(singleThree).to.eql(ocr.tokenize(threes)[8]);
            expect(singleThree).to.eql(ocr.tokenize(threes)[3]);
        });
        it('should return four for items from all fours', function () {
            expect(singleFour).to.eql(ocr.tokenize(fours)[0]);
            expect(singleFour).to.eql(ocr.tokenize(fours)[8]);
            expect(singleFour).to.eql(ocr.tokenize(fours)[3]);
        });
        it('should return five for items from all fives', function () {
            expect(singleFive).to.eql(ocr.tokenize(fives)[0]);
            expect(singleFive).to.eql(ocr.tokenize(fives)[8]);
            expect(singleFive).to.eql(ocr.tokenize(fives)[3]);
        });
        it('should return six for items from all sixs', function () {
            expect(singleSix).to.eql(ocr.tokenize(sixes)[0]);
            expect(singleSix).to.eql(ocr.tokenize(sixes)[8]);
            expect(singleSix).to.eql(ocr.tokenize(sixes)[3]);
        });
        it('should return seven for items from all sevens', function () {
            expect(singleSeven).to.eql(ocr.tokenize(sevens)[0]);
            expect(singleSeven).to.eql(ocr.tokenize(sevens)[8]);
            expect(singleSeven).to.eql(ocr.tokenize(sevens)[3]);
        });
        it('should return eight for items from all eights', function () {
            expect(singleEight).to.eql(ocr.tokenize(eights)[0]);
            expect(singleEight).to.eql(ocr.tokenize(eights)[8]);
            expect(singleEight).to.eql(ocr.tokenize(eights)[3]);
        });
        it('should return nine for items from all nines', function () {
            expect(singleNine).to.eql(ocr.tokenize(nines)[0]);
            expect(singleNine).to.eql(ocr.tokenize(nines)[8]);
            expect(singleNine).to.eql(ocr.tokenize(nines)[3]);
        });
    });
    describe('#isValid', function () {
        it('should return valid for the checksum on 345882865', function () {
            expect(ocr.isValid('345882865')).to.be.true;
        });
        it('should return invalid for the checksum on 345882866', function () {
            expect(ocr.isValid('345882866')).to.be.false;
        });
    });
});


var singleZero =
    ' _ \n' +
    '| |\n' +
    '|_|\n' +
    '   ';

var singleOne =
    '   \n' +
    '  |\n' +
    '  |\n' +
    '   ';

var singleTwo =
    ' _ \n' +
    ' _|\n' +
    '|_ \n' +
    '   ';
var singleThree =
    ' _ \n' +
    ' _|\n' +
    ' _|\n' +
    '   ';
var singleFour =
    '   \n' +
    '|_|\n' +
    '  |\n' +
    '   ';
var singleFive =
    ' _ \n' +
    '|_ \n' +
    ' _|\n' +
    '   ';
var singleSix =
    ' _ \n' +
    '|_ \n' +
    '|_|\n' +
    '   ';
var singleSeven =
    ' _ \n' +
    '  |\n' +
    '  |\n' +
    '   ';
var singleEight =
    ' _ \n' +
    '|_|\n' +
    '|_|\n' +
    '   ';
var singleNine =
    ' _ \n' +
    '|_|\n' +
    ' _|\n' +
    '   ';


var zeros =
    ' _  _  _  _  _  _  _  _  _ \n' +
    '| || || || || || || || || |\n' +
    '|_||_||_||_||_||_||_||_||_|\n' +
    '                           ';

var ones =
    '                           \n' +
    '  |  |  |  |  |  |  |  |  |\n' +
    '  |  |  |  |  |  |  |  |  |\n' +
    '                           ';

var twos =
    ' _  _  _  _  _  _  _  _  _ \n' +
    ' _| _| _| _| _| _| _| _| _|\n' +
    '|_ |_ |_ |_ |_ |_ |_ |_ |_ \n' +
    '                           ';

var threes =
    ' _  _  _  _  _  _  _  _  _ \n' +
    ' _| _| _| _| _| _| _| _| _|\n' +
    ' _| _| _| _| _| _| _| _| _|\n' +
    '                           ';

var fours =
    '                           \n' +
    '|_||_||_||_||_||_||_||_||_|\n' +
    '  |  |  |  |  |  |  |  |  |\n' +
    '                           ';

var fives =
    ' _  _  _  _  _  _  _  _  _ \n' +
    '|_ |_ |_ |_ |_ |_ |_ |_ |_ \n' +
    ' _| _| _| _| _| _| _| _| _|\n' +
    '                           ';

var sixes =
    ' _  _  _  _  _  _  _  _  _ \n' +
    '|_ |_ |_ |_ |_ |_ |_ |_ |_ \n' +
    '|_||_||_||_||_||_||_||_||_|\n' +
    '                           ';

var sevens =
    ' _  _  _  _  _  _  _  _  _ \n' +
    '  |  |  |  |  |  |  |  |  |\n' +
    '  |  |  |  |  |  |  |  |  |\n' +
    '                           ';

var eights =
    ' _  _  _  _  _  _  _  _  _ \n' +
    '|_||_||_||_||_||_||_||_||_|\n' +
    '|_||_||_||_||_||_||_||_||_|\n' +
    '                           ';

var nines =
    ' _  _  _  _  _  _  _  _  _ \n' +
    '|_||_||_||_||_||_||_||_||_|\n' +
    ' _| _| _| _| _| _| _| _| _|\n' +
    '                           ';