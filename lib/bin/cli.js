#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require('commander');
const packageInfo = require('../../package.json');
const index_1 = require("../index");
let port;
const program = new commander.Command(packageInfo.name);
program.version(packageInfo.version)
    .option('-p, --port <port>', 'choose port')
    .on('-h, --help', () => {
    return `the package to custom serve current folder content\r\n`;
});
program.parse(process.argv);
if (program.port) {
    index_1.default({ port: +program.port });
}
else {
    index_1.default({ port: 3000 });
}
