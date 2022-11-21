import genDiff from '../src/index.js';

const testStr = '{\n  - follow: to delete\n    host: unchanged\n  - proxy: to delete\n  - timeout: old value\n  + timeout: new value\n  + verbose: added data\n}';

test('gendiff', () => {
  expect(genDiff('__fixtures__/testJSON1.json', '__fixtures__/testJSON2.json')).toEqual(testStr);
});

/* test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
  }); */
