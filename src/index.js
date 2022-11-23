import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parse from './parser.js';
import compare from './comparator.js';
import format from './formatter.js';

const stringifyAndSort = (obj) => {
  // collect into sorted array from object
  const keys = [];
  for (const key in obj) {
    const keyStr = `${key[2]}${key}: ${obj[key]}`;
    let newStr = '';
    if (keyStr[1] === '+') {
      newStr = `${keyStr[0]}-${keyStr.substring(1)}`;
    } else newStr = `${keyStr[0]}+${keyStr.substring(1)}`;
    keys.push(newStr);
  }
  keys.sort();

  // collect into object-like string
  const result = [];
  result.push('{');
  for (const key of keys) {
    result.push(key.substring(2));
  }
  let str = result.join('\n  ');
  str += '\n}';

  return str;
};

const genDiff = (filepath1, filepath2, view = 'stylish') => {
  const fullpath1 = path.resolve(filepath1);
  const fullpath2 = path.resolve(filepath2);

  const extension1 = path.extname(fullpath1);
  const extension2 = path.extname(fullpath2);

  const file1 = fs.readFileSync(fullpath1);
  const file2 = fs.readFileSync(fullpath2);

  const obj1 = parse(file1, extension1);
  const obj2 = parse(file2, extension2);

  const obj3 = compare(obj1, obj2);
  const str = format(obj3, view);

  console.log('\nthis is the String result\n');
  console.log(str); // the actual result for user
  return str; // the actual result for Jest tester
};

export default genDiff;