import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Fridges'},
            {id: 2, name: 'Smartphones'},
            {id: 3, name: 'Laptops'},
            {id: 4, name: 'Stoves'}
        ];
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Nokia'}
        ];
        this._devices = [
            
        ];
        this._devicesForSlider = [
            
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 8;
        this._likedDevice = [];
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(total) {
        this._totalCount = total
    }

    setLimit(limit) {
        this._limit = limit
    }

    setLikedDevice(obj) {
        let arr = this._likedDevice.filter((el) => el.id === obj.id);
        if (arr.length !== 0) {
            arr[0].rating = obj.rating;
        }
        else {
            this._likedDevice.push(obj);
        }
    }

    setDevicesForSlider(devices) {
        this._devicesForSlider = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get page() {
        return this._page
    }
    get total() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
    get likedDevice() {
        return this._likedDevice
    }
    get devicesForSlider() {
        return this._devicesForSlider
    }
}