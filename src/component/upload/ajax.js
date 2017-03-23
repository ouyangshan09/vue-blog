/**
 * Created by OUYANG on 2017/3/22.
 * AJax封装
 * @author Ouyang
 * @version 1.0
 */

/**
 * 封装错误信息
 * */
function getError(action, option, xhr) {
    let msg;
    if(xhr.response){
        msg = `${xhr.status} ${xhr.response.error || xhr.response}`;
    }else if(xhr.responseText){
        msg = `${xhr.status} ${xhr.responseText}`;
    }else {
        msg = `fail to post ${action} ${xhr.status}'`;
    }
    const error = new Error(msg);
    error.status = xhr.status;
    error.method = 'post';
    error.url = action;
    return error;
}

/**
 * 封装响应体
 * */
function getBody(xhr) {
    const text = xhr.responseText || xhr.response;
    if(!text){
        return text;
    }
    try {
        return JSON.parse(text);
    }catch(e) {
        return text;
    }
}

/**
 * Ajax方法主体
 * @file option 参数对象
 * option: {
 *   headers,
 *   withCredentials,
 *   file,
 *   data,
 *   filename
 *   action,
 *   onProgress,
 *   onSuccess,
 *   onError,
 * }
 * */
export default function upload(option) {
    if(typeof XMLHttpRequest === 'undefined'){
        return;
    }
    const xhr = new XMLHttpRequest();
    const action = option.action;
    if(xhr.upload){
        xhr.upload.onprogress = function progress (e) {
            if(e.total > 0){
                e.percent = e.loaded / e.total * 100;
            }
            option.onProgress(e);
        };
    }
    const formData = new FormData();

    if(option.data){
        Object.keys(option.data).map(key => formData.append(key, option.data[key]));
    }
    formData.append(option.filename, option.file);

    xhr.onerror = function error(e) {
        option.onError(e);
    };
    xhr.onload = function onload() {
      if(xhr.status < 200 || xhr.status >= 300){
          return option.onError(getError(action, option, xhr));
      }
      option.onSuccess(getBody(xhr));
    };
    xhr.open('post', action, true);
    if(option.withCredentials && 'withCredentials' in xhr){
        xhr.withCredentials = true;
    }
    const headers = option.headers || {};
    for(let item in headers){
        if(headers.hasOwnProperty(item) && headers[item] !== null){
            xhr.setRequestHeader(item, headers[item]);
        }
    }
    xhr.send(formData);
}