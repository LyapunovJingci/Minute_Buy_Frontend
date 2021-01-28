import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colors from '../../constants/Colors'
import CountDown from 'react-native-countdown-component';

const ProductItem = props => {

    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
      TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style = {styles.product}>
            <View style={styles.touchable}>
                <TouchableOpacity onPress={props.onViewDetail} useForeground>
                    <View style = {styles.imagecontainer}>
                        <Image style = {styles.image} source={{uri: props.imageUrl}}/>
                        
                    </View>
                    <View style = {styles.details}>
                        <Text style = {styles.name}>{props.name}</Text>
                        <Text style = {styles.price}>${props.price.toFixed(2)}</Text>
                    </View>
                    <View style = {styles.actions}>
                            <CountDown
                                size={18}
                                until={3600} 
                                style={{alignItems: 'flex-start'}}
                                digitStyle={{backgroundColor: Colors.primary}}
                                digitTxtStyle={{color: Colors.light_background}}
                                separatorStyle={{color: Colors.dark_background}}
                                timeToShow={['H', 'M', 'S']}
                                timeLabels={{h: 'Hours', m: 'Minutes', s: 'Seconds'}}
                                showSeparator
                            />
                        <Button title = "Add to Cart" onPress={props.onAddToCart} color= {Colors.accent}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: Colors.dark_background,
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: Colors.light_background,
        height: 350,
        marginHorizontal: 20,
        marginVertical: 10
    },
    imagecontainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
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
        height: '25%',
        paddingHorizontal: 10
        
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10,
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
});

export default ProductItem;