import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
        backgroundColor: '#fff',
        fontFamily: 'Montserrat-SemiBold',
    },

    textInput: {
        backgroundColor: '#efefef',
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: '#434343',
        borderRadius: 5,
        marginVertical: 5,
        marginLeft: 20,
        fontFamily: 'Montserrat-SemiBold',
    },

    separator: {
        backgroundColor: '#efefef',
        height: 1,
    },

    circle: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 32,
        left: 15,
        borderRadius: 5,
    },

    line: {
        width: 1,
        height: 50,
        backgroundColor: '#d2d2d2',
        position: 'absolute',
        top: 35,
        left: 17,
        zIndex: -1,
    },

    square: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 85,
        left: 15,
    },
});

export default styles;
