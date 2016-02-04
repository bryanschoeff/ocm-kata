function parse(input) {
    return '';
}

function tokenize(input) {
    var i;
    var lines = input.split("\n");
    var tokens = [];
    
    for (i = 0; i < 9; i++)
    {
        tokens.push(getSingleToken(lines, i));
    }
    return tokens;
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

module.exports.parse = parse;
// we will expose this for now while we build our tests.
module.exports.tokenize = tokenize;