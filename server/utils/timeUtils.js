/**
 * Created by ouyangshan09 on 2017/3/18.
 * 时间戳工具
 */
import * as Utils from './infoUtils';

const ERROR_CONSTANT = '未知';



class TimeUtils {

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
        if((typeof value) !== 'undefined' && value !== null && value !== "" && !isNaN(value)){
            let dateValue = null;
            if(Utils.isNumber(value) && value.toString().length === 10){
                dateValue = value * 1000;
                return new Date(dateValue);
            }else if(Utils.isNumber(parseInt(value)) && value.length === 10){
                dateValue = parseInt(value) * 1000;
                return new Date(parseInt(dateValue));
            }else {
                return new Date(value);
            }
        }
        return new Date();
    }
    /**
     * 默认格式时间格式化
     * 参数支持String和Number类型
     * 时间格式 yy-mm-dd hh:mm:ss
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
     * 获得指定时间戳,例如30天后的日期时间戳
     * 1天=24小时=1440分钟=86400秒
     * @field day 天数
     * */
    static calculateScheduledDayTime(day){
        if(!Utils.isNull(day) && Utils.isNumber(day)){
            return day * 24 * 60 * 60;
        }else if(!Utils.isNull(day) && Utils.isNumber(parseInt(day))) {
            const dayValue = parseInt(day);
            return dayValue * 24 * 60 * 60;
        }
        return 0;
    }
    /**
     * 获得指定时间戳,例如1个小时后的时间戳
     * @field hour 1小时=60分钟=3600秒
     * */
    static calculateScheduledHourTime(hour){
        if(!Utils.isNull(hour)){
            const hourValue = Utils.isNumber(hour) ?  hour : parseInt(hour);
            if(!isNaN(hourValue)){
                return hourValue * 60;
            }
        }
        return 0;
    }
    /**
     * 比较现在的时间
     * @field timeTemp 10位时间戳
     * */
    static compareNowTime(timeTemp){
        return timeTemp <= this.getTime();
    }
}
module.exports = TimeUtils;
