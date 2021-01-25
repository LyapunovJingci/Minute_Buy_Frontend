import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector} from 'react-redux'
import ProductItem from '../components/shop/ProductItem'
const ProductOverviewScreen = props => {
    const products = useSelector(state => state.Products.availableProducts);
    return (<FlatList 
        data = {products} 
        renderItem={itemData => 
            <ProductItem 
                imageUrl={itemData.item.imageUrl}
                name={itemData.item.name}
                price={itemData.item.price}
                onViewDetail={() => {}}
                onAddToCart={() => {}}/>

        }/>);
};

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
};
export default ProductOverviewScreen;