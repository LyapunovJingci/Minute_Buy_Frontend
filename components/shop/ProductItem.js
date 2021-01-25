import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Colors from '../../constants/Colors'

const ProductItem = props => {
    return (<View style = {styles.product}>
        <Image style = {styles.image} source={{uri: props.imageUrl}}/>
        <Text style = {styles.name}>{props.name}</Text>
        <Text style = {styles.price}>${props.price.toFixed(2)}</Text>
        <View style = {styles.actions}>
            <Button title = "View Details" onPress={props.onViewDetail} color= {Colors.primary}/>
            <Button title = "Add to Cart" onPress={props.onAddToCart} color= {Colors.accent}/>
        </View>
    
    </View>);
};

const styles = StyleSheet.create({
    product: {
        padding: 10,
        shadowColor: Colors.dark_background,
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: Colors.light_background,
        height: 280,
        margin: 20
    },
    image: {
        width: '100%',
        height: '60%'
    },
    name: {
        marginVertical: 4,
        fontSize: 18,
        color: Colors.dark_background,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 14,
        color: Colors.primary,
        marginBottom: 8
    },
    actions: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    }
});

export default ProductItem;