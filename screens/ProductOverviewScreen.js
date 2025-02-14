import React from 'react'
import { FlatList, Platform } from 'react-native'
import { useSelector, useDispatch} from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ProductItem from '../components/shop/ProductItem'
import * as cartActions from '../store/actions/cart'
import HeaderButton from '../components/UI/HeaderButton'

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.Products.availableProducts);
    const dispatch = useDispatch();

    return (
        <FlatList 
            data = {products} 
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem 
                    imageUrl={itemData.item.imageUrl}
                    name={itemData.item.name}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        props.navigation.navigate('ProductDetail', 
                        {productId: itemData.item.id,
                        productName: itemData.item.name
                        });
                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item));
                    }}
                />
            )}
        />);
};

ProductOverviewScreen.navigationOptions = navData => {
    return {
      headerTitle: 'All Products',
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            onPress={() => {
                navData.navigation.navigate('Cart')
            }}
          />
        </HeaderButtons>
      )
    };
  };
export default ProductOverviewScreen;