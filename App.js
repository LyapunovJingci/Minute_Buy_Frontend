import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/Products';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  Products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store = {store}>
      <ShopNavigator></ShopNavigator>
    </Provider>
  );
}
