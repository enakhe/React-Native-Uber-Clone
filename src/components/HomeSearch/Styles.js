import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
        position: 'relative',
        // top: -1,
        width: '100%',
    },

    inputBox: {
        backgroundColor: '#F3F1F6',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 10,
    },

    inputText: {
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: '600',
        color: '#434343',
        fontFamily: 'Montserrat-SemiBold',
    },

    icon: {
        fontWeight: '700',
    },

    timeContainer: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 20,
        borderColor: '#dbdbdb',
    },

    row2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 5,
        borderColor: '#dbdbdb',
    },

    utility: {
        backgroundColor: '#F3F1F6',
        borderRadius: 10,
    },

    iconContainer: {
        backgroundColor: '#eaeaec',
        padding: 10,
        borderRadius: 25,
    },

    destinationText: {
        marginLeft: 10,
        fontWeight: '400',
        fontSize: 15,
        color: '#323240',
        fontFamily: 'Montserrat-SemiBold',
    },

    destinationSubText: {
        marginLeft: 10,
        fontSize: 12,
        color: '#75747C',
        fontFamily: 'Montserrat-Medium',
    },

    logoIcon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
});

export default styles;
