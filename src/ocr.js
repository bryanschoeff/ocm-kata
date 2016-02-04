function parse(input) {
    var tokens = tokenize(input);
    return parseTokens(tokens);
}

function tokenize(input) {
    var i;
    var lines = input.split("\n");
    var tokens = [];

    for (i = 0; i < 9; i++) {
        tokens.push(getSingleToken(lines, i));
    }
    return tokens;
}

function parseTokens(tokens) {
    return tokens.reduce(function(prev, curr) {
         return prev += parseToken(curr);
        }, '');
}

function parseToken(token) {
    switch (token) {
        case zero:
            return '0';
        case one:
            return '1';
        case two:
            return '2';
        case three:
            return '3';
        case four:
            return '4';
        case five:
            return '5';
        case six:
            return '6';
        case seven:
            return '7';
        case eight:
            return '8';
        case nine:
            return '9';
        default: 
            return '?';
    }
}

function getSingleToken(lines, offset) {
    // The newlines on the single tokens are really unnecessary
    //  but will make debugging easier for now.
    var i = offset * 3;
    return lines[0].slice(i, i + 3) + '\n' +
        lines[1].slice(i, i + 3) + '\n' +
        lines[2].slice(i, i + 3) + '\n' +
        lines[3].slice(i, i + 3);
}

var zero =
    ' _ \n' +
    '| |\n' +
    '|_|\n' +
    '   ';

var one =
    '   \n' +
    '  |\n' +
    '  |\n' +
    '   ';

var two =
    ' _ \n' +
    ' _|\n' +
    '|_ \n' +
    '   ';
var three =
    ' _ \n' +
    ' _|\n' +
    ' _|\n' +
    '   ';
var four =
    '   \n' +
    '|_|\n' +
    '  |\n' +
    '   ';
var five =
    ' _ \n' +
    '|_ \n' +
    ' _|\n' +
    '   ';
var six =
    ' _ \n' +
    '|_ \n' +
    '|_|\n' +
    '   ';
var seven =
    ' _ \n' +
    '  |\n' +
    '  |\n' +
    '   ';
var eight =
    ' _ \n' +
    '|_|\n' +
    '|_|\n' +
    '   ';
var nine =
    ' _ \n' +
    '|_|\n' +
    ' _|\n' +
    '   ';


module.exports.parse = parse;
module.exports.tokenize = tokenize;