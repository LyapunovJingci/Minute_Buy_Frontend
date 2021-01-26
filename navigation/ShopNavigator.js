import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native';
import ProductsOverviewScreen from '../screens/ProductOverviewScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
    {
    'ProductsOverviewScreen': ProductsOverviewScreen,
    'ProductDetail': ProductDetailScreen,
    Cart: CartScreen
    }, 
    {
    defaultNavigationOptions: {
        headerStyle: {
            //backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            backgroundColor: Colors.primary
        },
        //headerTintColor: Platform.OS === 'android' ? 'white' : ''
        headerTintColor: Colors.light_background 
    }
    }
);

export default createAppContainer(ProductsNavigator)