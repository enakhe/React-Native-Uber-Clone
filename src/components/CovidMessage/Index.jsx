import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './Styles';

const CovidMessage = (prop) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <AntDesign name={'check'} size={14} /> 20%
                promo applied
            </Text>
        </View>
    );
};

export default CovidMessage;
