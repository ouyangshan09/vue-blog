/**
 * Created by OUYANG on 2017/3/14.
 * 时间戳工具库
 * @author Ouyang
 * @version 1.0
 */
import * as Utils from './dataType';

const ERROR_CONSTANT = '未知';

class TimeUtils{

    /**
     * 获得当前系统时间戳，长度为10位
     * */
    static getTime(){
        const tempStr = Date.now().toString().substr(0, 10);
        return parseInt(tempStr);
    }
    /**
     * 转换为Date对象
     * @field value 可能为Number或String '123' or 123
     * */
    static parseDate(value){
        if(!Utils.isNull(value) && !isNaN(value)){
            let dateValue = null;
            if(Utils.isNumber(value) && Utils.toString(value).length === 10){
                dateValue = value * 1000;
                return new Date(dateValue);
            }else if(Utils.isNumber(parseInt(value)) && value.length === 10){
                dateValue = parseInt(value) * 1000;
                return new Date(parseInt(dateValue));
            }else {
                return new Date(value);
            }
        }
    }
    /**
     * 格式化 yy-mm-dd hh:mm:ss
     * */
    static defaultFormat(value){
        if(!Utils.isEmptyString(value) && !isNaN(value)){
            let date = this.parseDate(value);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            month = month < 10 ? ('0' + month) : month;
            day = day < 10 ? ('0' + day) : day;
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            hours = hours < 10 ? ('0' + hours) : hours;
            minutes = minutes < 10 ? ('0' + minutes) : minutes;
            seconds = seconds < 10 ? ('0' + seconds) : seconds;
            return `${year}-${month}-${day} ${hours}: ${minutes}: ${seconds}`;
        }
        return this.defaultFormat(new Date().getTime());
    }
    /**
     * 获得当前时间戳格式化值
     * 时间格式： yy-mm-dd hh:mm:ss
     * */
    static getFormatTime(){
        return TimeUtils.defaultFormat(new Date().getTime());
    }

    /**
     * 转换为Date类型为时间戳(10位)
     * 失败返回原值
     * */
    static parseDateTimeStamp(value){
        if((typeof value) !== 'undefined' && value !== null && value !== ""){
            return parseInt(new Date(value).getTime() / 1000);
        }
        return value;
    }
    /**
     * 合并2个Date对象的时间戳
     * */
    static computeTime(arg1, arg2){
        if(!arg1 || !arg2){
            return '';
        }
        let date = new Date(arg1);
        date.setHours(arg2.getHours());
        date.setMinutes(arg2.getMinutes());
        date.setSeconds(arg2.getSeconds());
        date.setMilliseconds(arg2.getMilliseconds());
        return date;
    }
}

export default TimeUtils;