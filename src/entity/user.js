/**
 * Created by ouyangshan09 on 2017/3/13.
 * 用户实体类型描述，使用建造者设计模式
 * @author Ouyang
 * @version 1.0
 */
class User{
    _id;
    _account;
    _password;
    constructor(){
        this._id = '';
        this._account = '';
        this._password = '';
    }

    id(value){
        this._id = value;
        return this;
    }
    account(value){
        this._account = value;
        return this;
    }
    password(value){
        this._password = value;
        return this;
    }
    build(){
        return {

        };
    }

    // get id() {
    //     return this._id;
    // }
    //
    // set id(value) {
    //     this._id = value;
    // }
    //
    // get account() {
    //     return this._account;
    // }
    //
    // set account(value) {
    //     this._account = value;
    // }
    //
    // get password() {
    //     return this._password;
    // }
    //
    // set password(value) {
    //     this._password = value;
    // }
}

/**
 * 用户建造者模式设计
 * */
class UserFactory {

    // constructor(){
    //     this.user = new User();
    // }
    // static create(){
    //     return new UserFactory();
    // }
    // id(value){
    //     this.user.id = value;
    //     return this;
    // }
    // account(value){
    //     this.user.account = value;
    //     return this;
    // }
    // password(value){
    //     this.user.password = value;
    //     return this;
    // }
    // build(){
    //     return this.user;
    // }

    // static id(value){
    //     User.id = value;
    //     console.log('id: ', value);
    //     return this;
    // }
    // static account(value){
    //     console.log('account: ', value);
    //     return this;
    // }
    // static password(value){
    //     console.log('password: ', value);
    //     return this;
    // }
    // static build(value){
    //     console.log('build: ', User);
    //     return this;
    // }
}

export default new User();