/**
 * Created by OUYANG on 2017/3/23.
 * ES7标准 Async练习
 * @author Ouyang
 */

const fs = require('fs');
const path = require('path');


const readFile = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (error, data) => {
            if(error) reject(error);
            resolve(data);
        });
    })
};
const asyncReadFile = async function (){
    const file = await readFile(path.join(__dirname, '../.babelrc'));
    return file;
};
const writeFile = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, 'Hello world', 'utf-8', err => {
            if(err) reject(err);
            resolve('success')
        });
    })
};
const asyncWriteFile = async function () {
    return writeFile('./test/message.text');
};


module.exports = {
    asyncReadFile,
    asyncWriteFile
};