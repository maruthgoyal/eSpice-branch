// (c) XINO
// Author: Sayam Kanwar
// Compiler for Brainfuck

var jsOutput = 'var sz=30000,bd=256;';
jsOutput += 'var arr = new Array(sz), i=0,out="";';
jsOutput += 'for(var j=0;j<arr.length; j++){ arr[j]=0; }';
// jsOutput is the main string to which the given
// Brainfuck's parallel JavaScript code is concatenated
var cnt = 0;
jsOutput += 'function mod(i) { if(arr[i]>=bd) {arr[i]-=bd;}';
jsOutput += 'arr[i]+=bd;if(arr[i]>=bd) {arr[i]-=bd;} }';
jsOutput += 'function fx() {if(i>=bd){i-=bd;} i+=bd; if(i>=bd){i-=bd;}}';
function compile(input) {
    // input is the string which contains
    // the Brainfuck code to be compiled

    for (var i = 0; i < input.length; i++) {
        // for loop runs through the
        // Brainfuck code character by character
        switch (input[i]) {
            // The eight cases for characters are checked and parallel
            // JavaScript code is concatenated to jsOutput
            case '+':
            jsOutput += 'arr[i]++;';
            jsOutput += 'mod(i);';
            // Increment value of current cell
            break;
            case '-':
            jsOutput += 'arr[i]--;';
            jsOutput += 'mod(i);';
            // Decrement value of current cell
            break;
            case '<':
            jsOutput += 'i--;';
            jsOutput += 'fx();';
            // Decrement cell index - move to previous cell
            break;
            case '>':
            jsOutput += 'i++;';
            jsOutput += 'fx();';
            // Increment cell index - move to next cell
            break;
            case '[':
            jsOutput += 'while (arr[i]!=0) {';
            // Initialize while loop
            break;
            case ']':
            jsOutput += '}';
            // Break out of while loop
            // if value of current cell is 0
            break;
            case '.':
            // jsOutput += 'console.log(arr[i]);';
            jsOutput += 'out+=String.fromCharCode(arr[i]);';
            break;
            // Return value of current cell
            case ',':
            jsOutput += 'arr[i] =';
            jsOutput += 'prompt("Enter value for current element");';
            // Take in an input value for current cell (between 0 and 255)
            break;
        }
    }
    jsOutput += 'console.log(out);';
    console.log(jsOutput);
    return jsOutput;
    // Once the for loop finishes running through the input code,
    // the final string, (containing js code) is returned
}


module.exports = {
    'compile': compile
};
