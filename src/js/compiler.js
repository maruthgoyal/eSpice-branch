// (c) XINO
// Author: Sayam Kanwar
// Compiler for Brainfuck

var jsOutput = '';
// jsOutput is the main string to which the given
// Brainfuck's parallel JavaScript code is concatenated
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
            jsOutput += 'cellArray[i]++;';
            // Increment value of current cell
            break;
            case '-':
            jsOutput += 'cellArray[i]--;';
            // Decrement value of current cell
            break;
            case '<':
            jsOutput += 'i--;';
            // Decrement cell index - move to previous cell
            break;
            case '>':
            jsOutput += 'i++;';
            // Increment cell index - move to next cell
            break;
            case '[':
            jsOutput += 'while (true) {';
            // Initialize while loop
            break;
            case ']':
            jsOutput += 'if(!cellArray[i]) {';
            jsOutput += 'break;';
            jsOutput += '}';
            jsOutput += '}';
            // Break out of while loop
            // if value of current cell is 0
            break;
            case '.':
            jsOutput += 'return cellArray[i];';
            break;
            // Return value of current cell
            case ',':
            jsOutput += 'cellArray[i] =';
            jsOutput += 'prompt("Enter value for current element");';
            // Take in an input value for current cell (between 0 and 255)
            break;
        }
    }
    return jsOutput;
    // Once the for loop finishes running through the input code,
    // the final string, (containing js code) is returned
}


module.exports = {
    'compile': compile
};
