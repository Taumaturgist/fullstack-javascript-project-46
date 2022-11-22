import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parser from './parser.js';

const compare = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2);

  const result = {};
  for (const key of keys) {
    if (!Object.hasOwn(obj1, key)) {
      result[`+ ${key}`] = obj2[key];
    } else if (!Object.hasOwn(obj2, key)) {
      result[`- ${key}`] = obj1[key];
    } else if (obj1[key] !== obj2[key]) {
      result[`- ${key}`] = obj1[key];
      result[`+ ${key}`] = obj2[key];
    } else {
      result[`  ${key}`] = obj1[key];
    }
  }
  return result;
};

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
/* EXAMPLE of output. follow and proxy are in 1 only, verbose is in 2 only;
  gendiff filepath1.json filepath2.json

{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
} */

const genDiff = (filepath1, filepath2) => {
  const fullpath1 = path.resolve(filepath1);
  const fullpath2 = path.resolve(filepath2);

  const extension1 = path.extname(fullpath1);
  const extension2 = path.extname(fullpath2);

  const file1 = fs.readFileSync(fullpath1);
  const file2 = fs.readFileSync(fullpath2);

  const obj1 = parser(file1, extension1);
  const obj2 = parser(file2, extension2);

  const obj3 = compare(obj1, obj2);
  const str = stringifyAndSort(obj3);

  console.log(str); // the actual result for user
  return str; // the actual result for Jest tester
};

export default genDiff;

// calculator of changes, not differencies.
