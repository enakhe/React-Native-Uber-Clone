import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

const TextInputComponent = ({textLabel, placeholder}) => {
    return (
        <View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Text style={styles.text}>{textLabel}</Text>
                <TextInput placeholder="Phone number" style={styles.inputBox} />
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        color: '#31323e',
    },
    
    inputBox: {
        backgroundColor: '#F2F2F3',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 30,
        marginVertical: 10,
    },
});

export default TextInputComponent;
