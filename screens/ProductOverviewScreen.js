import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector} from 'react-redux'

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.Products.availableProducts);
    return (<FlatList data = {products} 
        renderItem={itemData => <Text>{itemData.item.name}</Text>} />);
};

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
};
export default ProductOverviewScreen;