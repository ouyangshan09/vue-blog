/**
 * Created by OUYANG on 2017/3/14.
 * 工具库封装
 */
import * as DataType from './dataType';
import TimeUtils from './timeUtils';
import AuthorityUtils from './authorityUtils';

const BooleanUtils = {
    transformToNumber: DataType.transformToNumber
};
const NumberUtils = {
    transformToBoolean: DataType.transformToBoolean
};
const ObjectUtils = {
    transformToString: DataType.transformToString,
    parseJson: DataType.parseJson
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