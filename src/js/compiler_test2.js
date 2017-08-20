// (c) XINO
// Author: Sayam Kanwar
// Compiler for Brainfuck (Unit Test)

const compiler = require('./compiler');
const assert = require('assert');
const compile = compiler.compile;

//Test 2

assert.equal(compile('----[-->+++<]>--.[->+++<]>+.+++++.+.'),'var sz=30000,bd=256;var arr = new Array(sz), i=0,out="";for(var j=0;j<arr.length; j++){ arr[j]=0; }function mod(i) { if(arr[i]>=bd) {arr[i]-=bd;}arr[i]+=bd;if(arr[i]>=bd) {arr[i]-=bd;} }function fx() {if(i>=bd){i-=bd;} i+=bd; if(i>=bd){i-=bd;}}arr[i]--;mod(i);arr[i]--;mod(i);arr[i]--;mod(i);arr[i]--;mod(i);while (arr[i]!=0) {arr[i]--;mod(i);arr[i]--;mod(i);i++;fx();arr[i]++;mod(i);arr[i]++;mod(i);arr[i]++;mod(i);i--;fx();}i++;fx();arr[i]--;mod(i);arr[i]--;mod(i);out+=String.fromCharCode(arr[i]);while (arr[i]!=0) {arr[i]--;mod(i);i++;fx();arr[i]++;mod(i);arr[i]++;mod(i);arr[i]++;mod(i);i--;fx();}i++;fx();arr[i]++;mod(i);out+=String.fromCharCode(arr[i]);arr[i]++;mod(i);arr[i]++;mod(i);arr[i]++;mod(i);arr[i]++;mod(i);arr[i]++;mod(i);out+=String.fromCharCode(arr[i]);arr[i]++;mod(i);out+=String.fromCharCode(arr[i]);console.log(out);');
