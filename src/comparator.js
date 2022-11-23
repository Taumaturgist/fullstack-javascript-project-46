import _ from 'lodash';

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
    //test log for embedded structure debug
    console.log(result);
    return result;
  };

export default compare;