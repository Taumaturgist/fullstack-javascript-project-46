#!/usr/bin/env node

import { program } from 'commander';

const command = (names) => {
  for (const name of names) {
    console.log(`Hello, ${name}!`);
  }
};

program.parse(process.argv);

const { args } = program;
command(args);