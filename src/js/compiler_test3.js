// (c) XINO
// Author: Sayam Kanwar
// Compiler for Brainfuck (Unit Test)

const compiler = require('./compiler');
const assert = require('assert');
const compile = compiler.compile;

//Test 3

assert.equal(compile('+[------->++<]>--.+++.+++.-------------.++++++++.[->+++++<]>-.-[--->++<]>-.+++++++.+++.++.--------.'),'cellArray[i]++;while (true) {cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;i++;cellArray[i]++;cellArray[i]++;i--;if(!cellArray[i]) {break;}}i++;cellArray[i]--;cellArray[i]--;return cellArray[i];cellArray[i]++;cellArray[i]++;cellArray[i]++;return cellArray[i];cellArray[i]++;cellArray[i]++;cellArray[i]++;return cellArray[i];cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;return cellArray[i];cellArray[i]++;cellArray[i]++;cellArray[i]++;cellArray[i]++;cellArray[i]++;cellArray[i]++;cellArray[i]++;cellArray[i]++;return cellArray[i];while (true) {cellArray[i]--;i++;cellArray[i]++;cellArray[i]++;cellArray[i]++;cellArray[i]++;cellArray[i]++;i--;if(!cellArray[i]) {break;}}i++;cellArray[i]--;return cellArray[i];cellArray[i]--;while (true) {cellArray[i]--;cellArray[i]--;cellArray[i]--;i++;cellArray[i]++;cellArray[i]++;i--;if(!cellArray[i]) {break;}}i++;cellArray[i]--;return cellArray[i];cellArray[i]++;cellArray[i]++;cellArray[i]++;cellArray[i]++;cellArray[i]++;cellArray[i]++;cellArray[i]++;return cellArray[i];cellArray[i]++;cellArray[i]++;cellArray[i]++;return cellArray[i];cellArray[i]++;cellArray[i]++;return cellArray[i];cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;cellArray[i]--;return cellArray[i];');
