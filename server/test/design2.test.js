/**
 * Created by OUYANG on 2017/4/7.
 * 测试练习
 */

const regions = [
    { id: 1, name: 'Jiangsu' },
    { id: 2, name: 'Zhejiang' },
    { id: 3, name: 'Yunnan' },
    { id: 11, name: 'Nanjing', parent: 1 },
    { id: 12, name: 'Suzhou', parent: 1 },
    { id: 21, name: 'Hangzhou', parent: 2 },
    { id: 22, name: 'Ningbo', parent: 2 },
    { id: 31, name: 'Kunming', parent: 3 },
    { id: 32, name: 'Lijiang', parent: 3 },
    { id: 111, name: 'Jiangning', parent: 11 },
    { id: 112, name: 'Gaochun', parent: 11 },
    { id: 321, name: 'Ninglang', parent: 32 },
    { id: 322, name: 'Huaping', parent: 32 }
];

const getTree = arr => {
    const map = arr.reduce((acc, val) => {
        acc[val.id] = val;
        return acc;
    }, {});
    const tree = [];
    arr.forEach(region => {
        if(region.parent){
            const parent = map[region.parent];
            if(!parent.children){
                parent.children = [region];
            }else {
                parent.children.push(region);
            }
        }else {
            tree.push(region);
        }
    });

    return {map, tree};
};


describe("JavaScript 数据类型转换", function () {
    describe("数组转Tree", function () {
        it("结果", function () {
            const obj = getTree(regions);
            console.log("map: ", obj.map);
            console.log("tree: ", obj.tree);
        });
    });
});