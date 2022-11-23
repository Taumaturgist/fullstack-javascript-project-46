import stylish from './f_stylish.js';
//import plain from './f_plain.js';

const format = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`Unknown type of format: ${format}`);
  }
};

export default format;