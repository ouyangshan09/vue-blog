/**
 * Created by OUYANG on 2017/3/14.
 * 工具库封装
 */
import * as DataType from './dataType';
import TimeUtils from './timeUtils';
import AuthorityUtils from './authorityUtils';

const BooleanUtils = {
    transformToNumber: DataType.toNumber
};
const NumberUtils = {
    transformToBoolean: DataType.toBoolean
};
const ObjectUtils = {
    transformToString: DataType.toString,
    parseJson: DataType.toJson
};
const StringUtils = {
    isEmpty: DataType.isEmptyString
};
const ArrayUtils = {
    isEmpty: DataType.isEmptyArray
};

export {
    BooleanUtils,
    NumberUtils,
    ObjectUtils,
    StringUtils,
    ArrayUtils,
    AuthorityUtils,
    DataType,
    TimeUtils
}