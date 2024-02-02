import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import UberTypesRowComponent from '../UberTypesRowComponent';
import types from '../../data/types';
import Octicons from 'react-native-vector-icons/Octicons';
import ButtonComponent from '../ButtonComponent';
import CovidMessage from '../CovidMessage/Index';

const UberTypes = () => {
    const confirm = () => {
        console.warn('conform');
    };

    return (
        <View>
            <CovidMessage />
            <View style={styles.container}>
                <Octicons
                    name={'dash'}
                    size={25}
                    style={{textAlign: 'center'}}
                    color={'#434343'}
                />

                {types.map((type) => (
                    <UberTypesRowComponent type={type} key={type.id} />
                ))}
                <ButtonComponent label={'Confirm Uber'} whereTo={'Confirm'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
        position: 'relative',
        width: '100%',
    },
});

export default UberTypes;
