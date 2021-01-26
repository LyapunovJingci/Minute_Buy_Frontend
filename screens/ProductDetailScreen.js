import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import * as cartActions from '../store/actions/cart'
import Colors from '../constants/Colors'

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId')
    const selectedProduct = useSelector(state => state.Products.availableProducts.find(prod => prod.id === productId));
    const dispatch = useDispatch();

    return (
        <ScrollView>
            <View style={styles.imagecontainer}>
                <Image style={styles.image} source = {{ uri: selectedProduct.imageUrl }}/>
            </View>
            <Button title = "Add to Cart" 
                onPress = {() => {
                    dispatch(cartActions.addToCart(selectedProduct));
                }} 
                color= {Colors.accent}
            />
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.name}>{selectedProduct.name}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    );

};

ProductDetailScreen.navigationOptions = navData => {
    return {
      headerTitle: navData.navigation.getParam('productName')
    };
};


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    imagecontainer: {
        width: '100%',
        height: 400
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginTop: 20
    },
    description: {
        fontSize: 14,
        textAlign: 'justify',
        marginHorizontal: 15,
        color: Colors.dark_background
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 20,
        color: Colors.dark_background
    },
});

export default ProductDetailScreen;