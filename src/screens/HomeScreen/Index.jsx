import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import HomeMap from '../../components/HomeMap/Index';
import CovidMessage from '../../components/CovidMessage/Index';
import HomeSearch from '../../components/HomeSearch/Index';
import styles from './Styles';

const HomeScreen = ({navigation, position}) => {
    return (
        <View>
            <HomeMap position={position} />
            <View style={styles.content}>
                <CovidMessage />
                <HomeSearch navigation={navigation} />
            </View>
        </View>
    );
};

export default HomeScreen;
