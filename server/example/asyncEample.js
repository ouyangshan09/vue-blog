/**
 * Created by OUYANG on 2017/3/23.
 * ES7标准 Async练习
 * @author Ouyang
 */

require('babel-core/register');
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
    return await readFile(path.join(__dirname, '../.babelrc'));
};

console.log('fs: ', fs);

module.exports = asyncReadFile();