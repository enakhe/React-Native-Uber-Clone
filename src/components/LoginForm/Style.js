import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 5,
    },

    countryFlag: {
        height: 20,
        width: 20,
    },

    footer: {
        margin: 10,
    },

    footerText: {
        textAlign: 'center',
        fontSize: 12,
    },
});

export default styles;
