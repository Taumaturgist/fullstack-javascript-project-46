import genDiff from '../src/index.js';

const testStr = '{\n  - follow: to delete\n    host: unchanged\n  - proxy: to delete\n  - timeout: old value\n  + timeout: new value\n  + verbose: added data\n}';

test('gendiff', () => {
  console.log('.json and .json test');
  expect(genDiff('__fixtures__/testJSON1.json', '__fixtures__/testJSON2.json')).toEqual(testStr);
  console.log('.yaml and .yaml test');
  expect(genDiff('__fixtures__/testYAML1.yaml', '__fixtures__/testYAML2.yaml')).toEqual(testStr);
  console.log('.yml and .yml test');
  expect(genDiff('__fixtures__/testYML1.yml', '__fixtures__/testYML2.yml')).toEqual(testStr);
  console.log('.json and .yaml test');
  expect(genDiff('__fixtures__/testJSON1.json', '__fixtures__/testYAML2.yaml')).toEqual(testStr);
});
