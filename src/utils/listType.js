/**
 * Created by ouyangshan09 on 2017/4/8.
 * 实现List数据结构
 */

class ListType {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.data = [];
    }
    insert(element, insert){
        const insertPos = this.find(insert);
        if(insertPos > -1){
            this.data.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }
    //给列表的下一个位置添加元素
    append(element){
        this.data[this.listSize++] = element;
    }
    //寻找元素，找到则返回所在位置，否则返回-1
    find(element){
        let findIndex = -1;
        this.data.every((value, index) => {
            if(value === element){
                findIndex = index;
            }
            return value !== element;
        });
        return findIndex;
    }
    remove(element){
        let foundAt = this.find(element);
        if(foundAt > -1){
            this.data.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }
    getCurrentItem(){
        return this.data[this.pos];
    }
    moveTo(position){
        this.pos = position;
    }
    front(){
        this.pos = 0;
    }
    end(){
        this.pos = this.listSize - 1;
    }
    currentPos(){
        return this.pos;
    }
    prev(){
        if(this.pos > 0){
            --this.pos;
        }
    }
    next(){
        if(this.pos < this.listSize - 1){
            ++this.pos;
        }
    }
    size(){
        return this.listSize;
    }
    clear(){
        this.data = [];
        this.listSize = 0;
    }
    list(){
        return this.data;
    }
}

/**
 * 使用Js模拟栈数据结构，拥有以下方法
 * push，pop，peek，clear
 * */
class Stack {
    constructor(){
        this.stack = [];
        this.top = 0;
    }
    push(){
        
    }
    pop(){

    }
    peek(){

    }
    length(){

    }
    clear(){

    }
}

export {
    ListType,
    Stack
};