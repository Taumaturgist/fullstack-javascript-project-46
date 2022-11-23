import _ from 'lodash';

const compare = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys = _.sortBy(_.union(keys1, keys2));
  
    const result = keys.map((key) => {
        if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
            return { key, children: compare(obj1[key], obj2[key]), type: 'nested' };
        }
        if (!Object.hasOwn(obj1, key)) {
            return { key, value2: obj2[key], type : 'added' };
        }
        if (!Object.hasOwn(obj2, key)) {
            return { key, value1: obj1[key], type: 'deleted' };
        }
        if (obj1[key] !== obj2[key]) {
          return { key, value1: obj1[key], value2: obj2[key], type: 'changed' };
        }
        return { key, value1: obj1[key], type: 'unchanged' };
    })
    /*const result = {};
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
    }*/
    //test log for embedded structure debug
    console.log(result);
    return result;
  };

  export default compare;