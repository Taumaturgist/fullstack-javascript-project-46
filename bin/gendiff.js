#!/usr/bin/env node

console.log('I\'m launched!');

import {Command} from 'commander';

const program = new Command();

program
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number')
    .option('-h, --help', 'display help for command')

    const options = program.opts();
    if (options.help)

    