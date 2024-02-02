import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"

const UberTypesRowComponent = (props) => {
    
    const {type} = props;

    const getImage = () => {
        if(type.type === 'UberX') {
            return require('../assets/UberX.jpeg')
        }

        if(type.type === 'Comfort') {
            return require('../assets/Comfort.jpeg');
        }

        return require('../assets/UberXL.jpeg');
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={getImage()}
            />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type}{' '} <Ionicons name="person" size={13} />3
                </Text>
                <Text style={styles.time}>8:03PM drop off</Text>
            </View>
            <View style={styles.rightContainer}>
                <Ionicons name="pricetag" size={13} color={'#42d742'} />
                <Text style={styles.price}>est. ${type.price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        fontFamily: 'Montserrat-SemiBold',
    },

    image: {
        height: 50,
        width: 60,
        resizeMode: 'contain',
    },

    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
    },

    type: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
        fontFamily: 'Montserrat-Bold',
    },

    time: {
        color: '#5d5d5d',
        fontSize: 11,
        fontFamily: 'Montserrat-SemiBold',
    },

    rightContainer: {
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },

    price: {
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 5,
        fontFamily: 'Montserrat-SemiBold',
    },
});

export default UberTypesRowComponent;
