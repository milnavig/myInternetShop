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
            {id: 5, name: 'Fridge 5', raiting: 6, price: 1200, img: 'https://www.birite.com.au/wp-content/uploads/Teco-TFF210WNTBM-210L-Top-Mount-White-Fridge-Main.jpg'},
            {id: 6, name: 'Fridge 6', raiting: 5, price: 1200, img: 'https://www.birite.com.au/wp-content/uploads/Teco-TFF210WNTBM-210L-Top-Mount-White-Fridge-Main.jpg'}
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;
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
        this._total = total
    }

    setLimit(limit) {
        this._limit = limit
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
        return this._total
    }
    get limit() {
        return this._limit
    }
}