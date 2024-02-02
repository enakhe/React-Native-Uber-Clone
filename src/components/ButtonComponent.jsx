import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const ButtonComponent = ({navigation, whereTo, label}) => {

    const navigateToHome = () => {
        navigation.navigate(whereTo);
    };

    return (
        <Pressable style={styles.button} onPress={navigateToHome}>
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        backgroundColor: '#000',
        paddingHorizontal: 30,
        paddingVertical: 12,
        shadowColor: 'none',
        borderColor: 'none',
        margin: 20,
    },

    buttonText: {
        color: '#f1fffa',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Montserrat-SemiBold',
    },
});

export default ButtonComponent;
