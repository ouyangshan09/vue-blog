/**
 * Created by OUYANG on 2017/3/14.
 * 数据类型判断库
 * @author Ouyang
 * @version 1.0
 */
const ERROR = '未知';

const isNull = value => {
    return (typeof value).toLowerCase() === "object" && value === null;
};
const isFunction = value => {
    return Object.prototype.toString.call(value).toLowerCase() === "[object function]";
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
//检查String value不为空
const isEmptyString = value => {
    return !isNull(value) && value !== "";
};
//检查Array value不为空
const isEmptyArray = value => {
    return isArray(value) && value.length > 0;
};
//尝试把Boolean类型转换为Number类型,失败返回0
const transformToNumber = value => {
    if(isBoolean(value)){
        return value ? 1: 0;
    }else {
        return Boolean(value);
    }
};
//尝试把Number类型转换为Boolean类型，失败返回false
const transformToBoolean = value => {
    if(isNumber(value)){
        return value != 0;
    }else {
        const transformValue = parseInt(value);
        if(isNumber(transformValue && !isNaN(transformValue))){
            return transformValue != 0;
        }else {
            return false;
        }
    }
};
//尝试把所有类型转换为String类型，失败返回""(空字符)
const transformToString = value => {
    if((typeof value) !== 'undefined' && value !== null){
        return value.toString();
    }else {
        return '';
    }
};
//把Object类型转换为Json格式,去除vue观察者模式,用于debug测试
const parseJson = value => {
    if(!isNull(value)){
        return JSON.parse(JSON.stringify(value));
    }
    return ERROR;
};

export {
    isNull,
    isFunction,
    isObject,
    isArray,
    isBoolean,
    isString,
    isNumber,
    isEmptyString,
    isEmptyArray,
    transformToNumber,
    transformToBoolean,
    transformToString,
    parseJson,
}