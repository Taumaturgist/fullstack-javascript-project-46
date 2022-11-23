#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .name('genDiff by Al.Vlad')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => genDiff(filepath1, filepath2, program.opts().format))
  .parse();
