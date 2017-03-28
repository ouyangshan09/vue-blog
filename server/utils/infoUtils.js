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
/**
 * 获得指定时间戳,例如30天后的日期时间戳
 * 1天=24小时=1440分钟=86400秒
 * @field day 天数
 * */
const calculateDayTemp = value => {
    const day = parseInt(value);
    if(isNumber(day) && !isNaN(day)){
        return day * 24 * 60 * 60;
    }
    return 0;
};
/**
 * 获得指定时间戳,例如1个小时后的时间戳
 * @field hour 1小时=60分钟=3600秒
 * */
const calculateHourTemp = value => {
    const hour = parseInt(value);
    if(isNumber(hour) && !isNaN(hour)){
        return hour * 60 * 60;
    }
    return 0;
};
export {
    isNull,
    isObject,
    isArray,
    isBoolean,
    isString,
    isNumber,
    isEmptyString,
    isEmptyArray,
    calculateDayTemp,
    calculateHourTemp
}
