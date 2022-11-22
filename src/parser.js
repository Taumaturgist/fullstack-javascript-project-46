import yaml from 'js-yaml';

const parser = (file, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(file);
    case '.yml':
    case '.yaml':
      return yaml.load(file);
    default:
      return null;
  }
};

export default parser;

// calculator of changes, not differencies.
