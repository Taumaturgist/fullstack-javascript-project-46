import yaml from 'js-yaml';

const parse = (file, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(file);
    case '.yml':
    case '.yaml':
      return yaml.load(file);
    default:
      throw new Error(`Unknown type of format: ${extension}`);
  }
};

export default parse;
