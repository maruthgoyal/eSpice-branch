// (c) XINO
// Author: Sayam Kanwar
// Compiler for Brainfuck

window.onload = function() {
            document.addEventListener('keydown', myFunction);
        };


        var keyPressed = 0, inWhile = false, whileArr = [];
        function myFunction(e) {
            switch (e.keyCode) {
                case 107:
                pro('+');
                break;
                case 109:
                pro('-');
                break;

                case 187:
                var key;
                var isShift;
                if (window.event) {
                    key = window.event.keyCode;
                    isShift = !!window.event.shiftKey;
                } else {
                    key = ev.which;
                    isShift = !!ev.shiftKey;
                }
                if (isShift) {
                    switch (key) {
                        case 16:
                        break;
                        default:
                        pro('+');
                        break;
                    }
                }
                break;
                case 189:
                pro('-');
                break;
                case 188:
                var key;
                var isShift;
                if (window.event) {
                    key = window.event.keyCode;
                    isShift = !!window.event.shiftKey;
                } else {
                    key = ev.which;
                    isShift = !!ev.shiftKey;
                }
                if (isShift) {
                    switch (key) {
                        case 16:
                        break;
                        default:
                        pro('<');
                        break;
                    }
                } else {
                    pro(',');
                }
                break;
                case 190:
                var key;
                var isShift;
                if (window.event) {
                    key = window.event.keyCode;
                    isShift = !!window.event.shiftKey;
                } else {
                    key = ev.which;
                    isShift = !!ev.shiftKey;
                }
                if (isShift) {
                    switch (key) {
                        case 16:
                        break;
                        default:
                        pro('>');
                        break;
                    }
                } else {
                    pro('.');
                }
                break;
                case 219:
                pro('[');
                break;
                case 221:
                pro(']');
                break;
                case 13:
                pro(13);
                break;
                case 8:
                var parent = document.getElementById('myDIV');
                var child = document.getElementsByTagName('span');
                var lastElem = child[child.length - 1];
                parent.removeChild(lastElem);
                break;
                case 81:
                e.preventDefault();
                var input = document.getElementsByClassName('code');
                var main = [];
                for (var i = 0; i < input.length; i++) {
                    main[i] = input[i].innerText;
                }
                main = main.join();
                var fin = main.replace(/,/g, "");
                compile(fin);
                break;
            }
            function pro(arg) {
                if (arg == 13) {
                    var enterMain = document.createElement('SPAN');
                    var para = document.createElement('BR');
                    enterMain.appendChild(para);
                    document.getElementById('myDIV').appendChild(enterMain);
                } else {
                    var para = document.createElement('SPAN');
                    para.className = 'code';
                    if (arg == '<' || arg == '>') {
                        para.id = 'typeA';
                    } else if (arg == '-' || arg == '+') {
                        para.id = 'typeB';
                    } else if (arg == '[' || arg == ']') {
                        para.id = 'typeC';
                    } else if (arg == ',' || arg == '.') {
                        para.id = 'typeD';
                    } else {
                        para.id = 'typeE';
                    }
                    var t = document.createTextNode(arg);
                    para.appendChild(t);
                    document.getElementById('myDIV').appendChild(para);
                }
            }


function compile(input) {
    // input is the string which contains
    // the Brainfuck code to be compiled
var jsOutput = 'var sz=30000,bd=256;';
jsOutput += 'var arr = new Array(sz), i=0,out="";';
jsOutput += 'for(var j=0;j<arr.length; j++){ arr[j]=0; }';
// jsOutput is the main string to which the given
// Brainfuck's parallel JavaScript code is concatenated
var cnt = 0;
jsOutput += 'function mod(i) { if(arr[i]>=bd) {arr[i]-=bd;}';
jsOutput += 'arr[i]+=bd;if(arr[i]>=bd) {arr[i]-=bd;} }';
jsOutput += 'function fx() {if(i>=bd){i-=bd;} i+=bd; if(i>=bd){i-=bd;}}';
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
    console.log("Compiled JS Code: " + jsOutput);
    // Once the for loop finishes running through the input code,
    // the final string, (containing js code) is returned
}
}
