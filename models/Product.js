import { NativeModules } from "react-native";

class Product {
    constructor(id, name, description, price, imageUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

export default Product;