import {makeAutoObservable} from 'mobx';

export default class FurnitureStore {

    constructor() {
        this._categories = [
            {id: 1, name: 'Prestashop'},
            {id: 2, name: 'Magento'},
            {id: 3, name: 'Bigcommerce'},
            {id: 4, name: 'osCommerce'},
            {id: 5, name: '3dcart'},
            {id: 6, name: 'Bags'},
            {id: 7, name: 'Accessories'},
            {id: 8, name: 'Jewellery'},
            {id: 9, name: 'Watches'}
        ];
        this._brands = [
            {id: 1, name: 'Coaster Furniture'},
            {id: 2, name: 'Fusion Dot High Fashion'},
            {id: 3, name: 'Unique Furnitture Restor'},
            {id: 4, name: 'Dream Furnitture Flipping'},
            {id: 5, name: 'Young Repurposed'},
            {id: 6, name: 'Green DIY furniture'}
        ];
        this._furnitures = [
            {id: 1, name: 'Dictum morbi', price: 26, rating: 4, colors: ['yellow', 'pink', 'blue'], discount: '50% Discount Offer', img: 'https://i.ibb.co/r68vsPB/dictum.png'},
            {id: 2, name: 'Sodales sit', price: 26, rating: 4, colors: ['yellow', 'pink', 'blue'], discount: '50% Discount Offer', img: 'https://i.ibb.co/r68vsPB/dictum.png'},
            {id: 3, name: 'Nibh varius', price: 26, rating: 4, colors: ['yellow', 'pink', 'blue'], discount: '50% Discount Offer', img: 'https://i.ibb.co/r68vsPB/dictum.png'},
            {id: 4, name: 'Mauris quis', price: 26, rating: 4, colors: ['yellow', 'pink', 'blue'], discount: '50% Discount Offer', img: 'https://i.ibb.co/r68vsPB/dictum.png'},
        ];

        makeAutoObservable(this);
    }

    setCategories(category) {
        this._categories = category;
    }

    setBrands(brand) {
        this._brands = brand;
    }

    setFurnitures(furniture) {
        this._furnitures = furniture;
    }

    get categories() {
        return this._categories;
    }

    get brands() {
        return this._brands;
    }

    get furnitures() {
        return this._furnitures;
    }
}