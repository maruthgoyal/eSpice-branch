#include<stdlib.h>
#include<iostream>
#include<thread>
#include "eval.hpp"
#include "parse.hpp"
/*
	Copyright 2017 Palash Taneja
*/

using namespace std;

void clear_screen() {
#ifdef WINDOWS
    system("cls");
#else
    system("clear");
#endif
}

void lod(string x) {
    clear_screen();
    cout << x;
    for ( int i = 0; i < 6; i++ ) {
        cout << ".";
    }
    clear_screen();
}

void ph(string x) {
    clear_screen();
    printf("---------------------------------------- \n \n");
    cout << "THE " << x << " COMMAND" << endl;
    printf("\n \n");
}

void phx(string x) {
    clear_screen();
    printf("---------------------------------------- \n \n");
    cout << x << endl;
    printf("\n \n");
}

void pe() {
    printf("---------------------------------------- \n \n");
    printf("Press 1 to go back. \n");
    int x = 0;
    while (!x) {
        cin >> x;
    }
    clear_screen();
}

void help(int m);

void cmds() {
    lod("Opening Commands");
    int fl = 1;
    while (fl) {
        printf("LIST OF COMMANDS: \n");
        printf("1 -> > \n");
        printf("2 -> < \n");
        printf("3 -> + \n");
        printf("4 -> - \n");
        printf("5 -> . \n");
        printf("6 -> , \n");
        printf("7 -> [ \n");
        printf("8 -> ] \n");
        printf("0 -> Back to HELP \n");
        printf("Enter your choice: "); int x; cin >> x;
       switch (x) {
            case 1:
                ph(">");
                printf("The > is used to increase the pointer by 1. ");
                printf("It's equivalent to ptr++ in C\n");
                printf("Example: >> points to the second address. \n");
                pe();
                break;
            case 2:
                ph("<");
                printf("The < is used to decrease the pointer by 1. ");
                printf("It's equivalent to ptr-- in C\n");
                printf("Example: >>>><<< points to the first address. \n");
                pe();
                break;
            case 3:
                ph("+");
                printf("The + is used to increase the value ");
                printf("on the current pointer.\n");
                printf("Example: >++ sets the value 2 at the ");
                printf("first address. \n");
                pe();
                break;
            case 4:
                ph("-");
                printf("The - is used to decrease the value on the current ");
                printf("pointer. It's equivalent to --*ptr in C\n");
                printf("Example: >++++--- sets the value 1 at the ");
                printf("first address.\n");
                pe();
                break;
            case 5:
                ph(".");
                printf("The . is used to print the current value on the");
                printf(" pointer. It's equivalent to putchar(*ptr) in C \n");
                printf("Example: >>++-. prints 2 converted to char as");
                printf(" per ASCII code. \n");
                pe();
                break;
            case 6:
                ph(",");
                printf("The , is used to input a character and store it on ");
                printf("the pointer.It's equivalent to *ptr=getchar()\n");
                printf("Example: >>,. inputs a character, ");
                printf("stores it on the second address and prints it. \n");
                pe();
                break;
            case 7:
                ph("[");
                printf("The [ is used to initiate a loop. It's ");
                printf("equivalent to while(*ptr){ in C \n");
                printf("Example: >++++[-] creates a loop which ");
                printf("runs for four times. \n");
                pe();
                break;
            case 8:
                ph("]");
                printf("The ] is used to terminate the definition ");
                printf("of the loop. It's equivalent to } in C \n");
                printf("Example: >++++[-] creates a loop which ");
                printf("runs for four times. \n");
                pe();
                break;
            case 0:
                fl = 0;
                lod("Loading Help");
                help(0);
                break;
            default:
                printf("Enter a valid command! \n");
        }
    }
}

void exmp() {
    lod("Loading Example");
    phx("EXAMPLE");
    printf("[This program prints 'Hello World!' and a newline to the screen, its \n length is 106 active command characters. [It is not the shortest.] \n This loop is an 'initial comment loop', a simple way of adding a comment \n to a BF program such that you dont have to worry about any command \n characters. Any '.', ',', '+', '-', '<' and '>' characters are simply \n ignored, the '[' and ']' characters just have to be balanced. This \n loop and the commands it contains are ignored because the current cell \n defaults to a value of 0; the 0 value causes this loop to be skipped.\n ] \n ++++++++               Set Cell #0 to 8\n [ \n    >++++               Add 4 to Cell #1; this will always set Cell #1 to 4 \n    [                   as the cell will be cleared by the loop \n        >++             Add 2 to Cell #2 \n        >+++            Add 3 to Cell #3 s\n        >+++            Add 3 to Cell #4 \n        >+              Add 1 to Cell #5 \n        <<<<-           Decrement the loop counter in Cell #1 \n    ]                   Loop till Cell #1 is zero; number of iterations is 4 \n    >+                  Add 1 to Cell #2 \n    >+                  Add 1 to Cell #3 \n    >-                  Subtract 1 from Cell #4 \n    >>+                 Add 1 to Cell #6 \n    [<]                 Move back to the first zero cell you find; this will \n                        be Cell #1 which was cleared by the previous loop \n    <-                  Decrement the loop Counter in Cell #0 \n]                       Loop till Cell #0 is zero; number of iterations is 8\n The result of this is: \n Cell No :   0   1   2   3   4   5   6 \n Contents:   0   0  72 104  88  32   8 \n Pointer :   ^ \n \n >>.                     Cell #2 has value 72 which is 'H' \n >---.                   Subtract 3 from Cell #3 to get 101 which is 'e' \n +++++++..+++.           Likewise for 'llo' from Cell #3 \n >>.                     Cell #5 is 32 for the space \n <-.                     Subtract 1 from Cell #4 for 87 to give a 'W' \n <.                      Cell #3 was set to 'o' from the end of 'Hello' \n +++.------.--------.    Cell #3 for 'rl' and 'd' \n >>+.                    Add 1 to Cell #5 gives us an exclamation point \n >++.                    And finally a newline from Cell #6  \n End of example. \n \n");
    pe();
}

void drive();

void help(int m) {
    if ( m ) lod("Entering Tour");
    int flag = 1;
    while ( flag ) {
        printf("WELCOME TO BRAINFSDF \n");
        printf("Select one of the following options: \n1->List Commands\n");
        printf("2-> Example code\n0-> Exit tour\n");
        printf("Enter your choice: "); int x; cin >> x;
        switch (x) {
            case 1:
                cmds();
                break;
            case 2:
                exmp();
                break;
            case 0:
                flag = 0;
                lod("Loading Main");
                drive();
                break;
            default:
                printf("Enter valid option! \n");
        }
    }
}

void rep() {
    lod("Loading Interpreter");
    int fx = 1;
    printf("INTERPRETER (--help for commands) \n");
    while ( fx ) {
        printf(">");
        string cur; cin >> cur; printf("\n");
        if ( cur == "--help" ) {
            printf("run ---> Run code \n");
            printf("exit ---> Exit the program \n");
            printf("\n");
        } else if ( cur == "run" ) {
            printf(">");
            string s;
            cin >> s;
            node *cur = parse(&s[0] , s.size());
            if ( cur == NULL ) {
                printf("INVALID CODE \n");
            } else {
                printf("\nOUTPUT: ");
                evaluate(cur);
                printf("\n");
            }
        } else if ( cur == "exit" ) {
            fx = 0;
            lod("Loading Main");
            drive();
            break;
        }
    }
}

void drive() {
    int mf = 1;
    while ( mf ) {
        printf(">");
        string s; cin >> s; printf("\n");
        if ( s == "--help" ) {
            printf("repl ---> Open Interpreter \n");
            printf("tour ---> Take a tour \n");
            printf("exit ---> Exit the program \n");
            printf("\n");
        } else if ( s == "repl" ) {
            rep();
        } else if ( s == "tour" ) {
            help(1);
        } else if ( s == "exit" ) {
            mf = 0;
        }
    }
}

int main() {
    printf("WELCOME TO THE BRAINFSDF PROGRAM: (--help for HELP) \n");
    drive();
}
