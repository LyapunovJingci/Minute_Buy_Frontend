import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native';
import ProductsOverviewScreen from '../screens/ProductOverviewScreen';
import Colors from '../constants/Colors'

const ProductsNavigator = createStackNavigator(
    {
    ProductsOverviewScreen: ProductsOverviewScreen
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