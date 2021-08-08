import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._goods = [];
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setGoods(device) {
        this._goods.push(device);
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get goods() {
        return this._goods;
    }
}