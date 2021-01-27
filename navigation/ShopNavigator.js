import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator} from 'react-navigation-drawer'
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductsOverviewScreen from '../screens/ProductOverviewScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrderScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primary
    },
    headerTintColor: Colors.light_background
};

const ProductsNavigator = createStackNavigator(
    {
    'ProductsOverviewScreen': ProductsOverviewScreen,
    'ProductDetail': ProductDetailScreen,
    Cart: CartScreen
    }, 
    {
        navigationOptions: {
          drawerIcon: drawerConfig => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={drawerConfig.tintColor}
            />
          )
        },
    
    defaultNavigationOptions: defaultNavOptions
    }
);

const OrdersNavigator = createStackNavigator(
    {
      Orders: OrdersScreen
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Ionicons
            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            size={23}
            color={drawerConfig.tintColor}
          />
        )
      },
      defaultNavigationOptions: defaultNavOptions
    }
  );
  
  const ShopNavigator = createDrawerNavigator(
    {
      Products: ProductsNavigator,
      Orders: OrdersNavigator
    },
    {
      contentOptions: {
        activeTintColor: Colors.primary
      }
    }
  );

export default createAppContainer(ShopNavigator)