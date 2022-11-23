import _ from 'lodash';

const getValue = (value) => {
  if (typeof value === 'string') return `'${value}'`;
  if (_.isObject(value)) return '[complex value]';
  return value;
};

const plain = (obj) => {
  const iter = (node, path) => {
    const body = node.map((value) => {
      const keyPath = (path === '' ? `${value.key}` : `${path}.${value.key}`);

      switch (value.type) {
        case 'nested':
          return iter(value.children, keyPath);
        case 'added':
          return `Property '${keyPath}' was added with value: ${getValue(value.value2)}`;
        case 'deleted':
          return `Property '${keyPath}' was removed`;
        case 'changed':
          return `Property '${keyPath}' was updated. From ${getValue(value.value1)} to ${getValue(value.value2)}`;
        case 'unchanged':
          return null;
        default:
          throw new Error(`Unknown type of diff: ${value.type}`);
      }
    });

    return [...body].filter(Boolean).join('\n');
  };
  return iter(obj, '');
};

export default plain;
