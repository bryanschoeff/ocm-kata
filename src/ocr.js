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
    var i = offset * 3;
    return lines[0].slice(i, i + 3) + '\n' +
           lines[1].slice(i, i + 3) + '\n' +
           lines[2].slice(i, i + 3) + '\n' +
           lines[3].slice(i, i + 3);
}

function token(contents) {
    this.token = contents;
    
    
}


module.exports.parse = parse;
// we will expose this for now while we build our tests.
module.exports.tokenize = tokenize;