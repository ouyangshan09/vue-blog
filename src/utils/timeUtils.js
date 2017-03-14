/**
 * Created by OUYANG on 2017/3/14.
 * 时间戳工具库
 * @author Ouyang
 * @version 1.0
 */

const ERROR_CONSTANT = '未知';

class TimeUtils{

    /**
     * 格式化 yy-mm-dd hh:mm:ss
     * */
    static format(value){
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
     * 转换String或Number类型为Date类型
     * 失败返回原值
     * */
    static parseDate(value){
        if((typeof value) !== 'undefined' && value !== null && value !== ""){
            return new Date(value);
        }
        return value;
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