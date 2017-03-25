/**
 * Created by ouyangshan09 on 2017/3/18.
 * 参数唯恐判断封装
 */

const isNull = value => {
    return value === null || (typeof value).toLowerCase() === 'undefined';
};
const isObject = value => {
    return (typeof value).toLowerCase() === "function"
        || (typeof value).toLowerCase() === "object"
        && !!value;
};
const isArray = value => {
    return isObject(value) && Object.prototype.toString.call(value).toLowerCase() === "[object array]";
};
const isBoolean = value => {
    return (typeof value).toLowerCase() === "boolean";
};
const isString = value => {
    return (typeof value).toLowerCase() === "string";
};
const isNumber = value => {
    return (typeof value).toLowerCase() === "number";
};
const isEmptyString = value => {
    if(isNull(value)){
        return true;
    }
    return value === "" || value.length === 0;
};
const isEmptyArray = value => {
    return isArray(value) && value.length === 0;
};


module.exports = {
    isNull,
    isObject,
    isArray,
    isBoolean,
    isString,
    isNumber,
    isEmptyString,
    isEmptyArray
};
