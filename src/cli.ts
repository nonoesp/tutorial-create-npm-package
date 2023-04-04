#!/usr/bin/env node

import { Command } from 'commander'
const program = new Command()

program
    .option('-n, --name [string]', 'Name', 'Human')

program.parse(process.argv)

const options = program.opts()

console.log(`Hello, ${options.name}!`);