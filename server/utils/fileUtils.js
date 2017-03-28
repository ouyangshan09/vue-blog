/**
 * Created by OUYANG on 2017/3/28.
 * 文件读取工具
 */

import fs from 'fs';

const readFile = function (fileName) {
    return new Promise((resolve, reject) =>{
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    });
};

const write = function (fileName, msg, encode) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, msg, encode, err => {
            if(err) reject(err);
            resolve('success');
        });
    })
};

const asyncReadFile = async function (fileName) {
    try {
        const file = await readFile(fileName);
        return file;
    }catch (e){
        return null;
    }
};
const asyncWriteFile = async function (fileName, msg, encode) {
    try {
        return await write(fileName, msg, encode);
    }catch (e){
        return null;
    }

};

export {
    asyncReadFile,
    asyncWriteFile,
    readFile,
    write,
}