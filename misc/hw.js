#!/usr/bin/env node

import { program } from 'commander';

const hello = (name) => {
  return `Hello, ${name}!`;
};

const command = (names, lower, upper) => {
  for (const name of names) {
    const msg = hello(name);
    if (lower) {
      console.log(msg.toLowerCase());
    } else if (upper) {
      console.log(msg.toUpperCase());
    } else {
      console.log(msg);
    }
  }
};

program
.option('-l, --lower', 'only use lowercase letters')
.option('-u, --upper', 'only use uppercase letters')
.parse(process.argv);

const { args } = program;
const options = program.opts();
const { lower, upper } = options;

command(args, lower, upper);


/*program
  .version('0.0.1')
  .command('hello <names...>', 'says hello to people')
  .parse(process.argv);*/

/*const command = (names) => {
    console.log('Hello, World!');    
    for (const name of names) {
        console.log(`Hello, ${name}!`);
      }
  };

  program
  .version('0.0.1')
  .arguments('<names...>')
  .action(command)
  .parse(process.argv);*/