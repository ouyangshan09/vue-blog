/**
 * Created by ouyangshan09 on 2017/3/18.
 * 时间戳工具
 */

const ERROR_CONSTANT = '未知';

class TimeUtils {

    static getTime(){
        return Math.round(new Date().getTime() / 1000);
    }
    static parseDate(value){
        if((typeof value) !== 'undefined' && value !== null && value !== ""){
            return new Date(value);
        }
        return new Date();
    }
    /**
     * 默认格式时间格式化
     * 时间格式 yy-mm-dd hh:mm:ss
     * */
    static defaultFormat(value){
        if((typeof value) !== 'undefined' && value !== null && value !== ""){
            const date = new Date(value);
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
        return ERROR_CONSTANT;
    }
    /**
     * 获得当前时间戳格式化值
     * 时间格式： yy-mm-dd hh:mm:ss
     * */
    static getFormatTime(){
        return TimeUtils.defaultFormat(new Date());
    }
}
module.exports = TimeUtils;
