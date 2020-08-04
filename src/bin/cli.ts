#!/usr/bin/env node

const commander = require('commander')
const packageInfo = require('../../package.json');
import svrx from '../index'

let port

const program = new commander.Command(packageInfo.name);

program.version(packageInfo.version)
.option('-p, --port <port>', 'choose port')
.on('-h, --help', () => {
    return `the package to custom serve current folder content\r\n`  
})

program.parse(process.argv)

port = +program.port

if(program.port) {
    svrx({port})
} else {
    svrx({port: 3000})
}
