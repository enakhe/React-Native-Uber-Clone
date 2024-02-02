import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './Styles';
import Login from '../../components/LoginForm/Index';

const Signup = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView contentContainerStyle={styles.contentContainer}>
            </ScrollView> */}
            {/* <Login navigation={navigation} /> */}
        </SafeAreaView>
    );
};

export default Signup;
