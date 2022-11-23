import _ from 'lodash';

const spacesNum = 4;
const getSpaces = (count) => ' '.repeat(count * spacesNum);

const getValue = (node, level) => {
    
    if (!_.isObject(node)) return node;

    const bracketLastSpaces = getSpaces(level - 1);
    const body = Object.entries(node).map(([key, value]) => 
        `${getSpaces(level)}${key}: ${getValue(value, level + 1)}`);

    return [
        '{',
        ...body,
        `${bracketLastSpaces}}`
    ].join('\n');
};

const stylish = (obj, level = 1) => {
    const spaces = getSpaces(level).slice(0, getSpaces(level) - 2);
    const bracketLastSpaces = getSpaces(level - 1);

    const body = obj.flatMap((value) => {
        switch (value.type) {
            case 'nested':
                return `${spaces}  ${value.key}: ${stylish(value.children, level + 1)}`;
            case 'added':
                return `${spaces}+ ${value.key}: ${getValue(value.value2, level + 1)}`;
            case 'deleted':
                return `${spaces}- ${value.key}: ${getValue(value.value1, level + 1)}`;
            case 'unchanged':
                return `${spaces}  ${value.key}: ${getValue(value.value1, level + 1)}`;
            case 'changed':
                return [
                    `${spaces}- ${value.key}: ${getValue(value.value1, level + 1)}`,
                    `${spaces}+ ${value.key}: ${getValue(value.value2, level + 1)}`
                ];
            default:
                throw new Error(`Unknown type of data: ${value.type}`);
        }
    });

    return [
        '{',
        ...body,
        `${bracketLastSpaces}}`
    ].join('\n');
};

export default stylish;