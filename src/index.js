import fs from 'fs';
import path from 'path';
import parse from './parser.js';
import compare from './comparator.js';
import format from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fullpath1 = path.resolve(filepath1);
  const fullpath2 = path.resolve(filepath2);

  const extension1 = path.extname(fullpath1);
  const extension2 = path.extname(fullpath2);

  const file1 = fs.readFileSync(fullpath1);
  const file2 = fs.readFileSync(fullpath2);

  const obj1 = parse(file1, extension1);
  const obj2 = parse(file2, extension2);

  const obj3 = compare(obj1, obj2);
  const str = format(obj3, formatName);
  
  console.log(str); // the actual result for user
  return str; // the actual result for Jest tester
};

export default genDiff;
