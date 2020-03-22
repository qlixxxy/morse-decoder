const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let letters = {};
    let resultArray = expr.split(""); 
    let letterLength = expr.length / 10;
    for(let i = 0; i < letterLength; i++) {
        let from = i*10;
        let until = from + 10;
        letters[i+1] = resultArray.slice(from, until).join("");
    }
    for(let i in letters) {
        if (letters[i].indexOf(1) !== -1) {
            let from = letters[i].indexOf(1);
            letters[i] = letters[i].slice(from);
        }
    }
    for(let i in letters) {
        while(letters[i].includes('10')) {
            letters[i] = letters[i].replace('10', '.');
        }
    }
    for(let i in letters) {
        while(letters[i].includes('11')) {
            letters[i] = letters[i].replace('11', '-');
        }
    }
    for(let i = 1; i <= letterLength; i++) {
        if(letters[i] == '**********') {
            result = result + ' ';
        } else {
            result = result + MORSE_TABLE[letters[i]];
        }
    }
    return result;
}

module.exports = {
    decode
};