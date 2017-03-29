/**
 * Created by OUYANG on 2017/3/28.
 * 用户业务逻辑相关API接口, 关联数据库
 * @author Ouyang
 * @version 1.0
 */
import db from '../db/dbConnection';
import User from '../model/User';
import * as Utils from '../utils/infoUtils';
import * as FileUtils from '../utils/fileUtils';
import TimeUtils from '../utils/timeUtils';
import UUIDUtils from '../utils/uuidUtils';

//Schema注册名
const NAME = User.getName();

/**
 * 用户业务接口
 * */
class UserApi {

    constructor(){
        this.userModel = db.model(NAME);
    }
    /**
     * 创建账号接口封装
     * @field user -- Object {id: xx, account: xx, password: xx, createTime: xx}
     * */
    async createAccount(user){
        const {
            id = UUIDUtils.createUUID(),
            createTime = TimeUtils.getTime(),
            account,
            password = '123456',
        } = user;
        const entity = new this.userModel({
            id: id,
            account: account,
            password: password,
            createTime: createTime
        });
        return await entity.createAccount();
    }
    /**
     * 查询账号
     * @field account 用户账号
     * @result: Y: 则返回查询结果, N: 则返回null
     * */
    async findByAccount(account){
        const entity = new this.userModel({ account: account });
        return await entity.findAccountIsExist();
    }
    /**
     * 查询账号, 不存在则创建用户
     * @field user -- Object {id: xx, account: xx, password: xx, createTime: xx}
     * */
    async findByAccountAfterCreateThat(user){
        const { account } = user;
        const result = await this.findByAccount(account);
        if(Utils.isNull(result)){
            return await this.createAccount(user);
        }
        return null;
    }
    /**
     * 使用账号和密码查询, 并创建Token和Token持续时间
     * @field obj -- Object {account: xx, password: xx expires: xx}
     * */
    async findByAccountAndPasswordWitchCreateToken(obj){
        const {account, password, expires = 1} = obj;
        const result = await this.findByAccount(account);
        //查询不到账号
        if(Utils.isNull(result)){
            return null;
        }
        //查到了, 但密码不一致
        if(result.password !== password + ""){
            return result;
        }
        const privateKey = await FileUtils.readFile('./private.key');
        const token = UUIDUtils.createToken(result, privateKey);
        const expiresValue = TimeUtils.calculateScheduledHourTimestamp(expires);
        return await result.createAccountTokenAndTokenTime(token, expiresValue);
    }
    /**
     * 更新用户Token持续时间
     * @field obj Object {account: xx, expires: xx}
     * */
    async updateTokenExpires(obj){
        const {account, expires = 1} = obj;
        const expiresValue = TimeUtils.calculateScheduledHourTimestamp(expires);
        const result = await this.findByAccount(account);
        if(Utils.isNull(result)){
            return null;
        }
        return await result.updateTokenExpires(expiresValue);
    }
}

export default UserApi;