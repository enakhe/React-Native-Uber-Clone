import React from 'react';
import {StyleSheet, View} from 'react-native';
import UberTypes from '../../components/UberTypes/Index';
import RouteMap from '../../components/RouteMap/Index';

const SearchResult = ({navigation, route}) => {

    const {originPlace, destinationPlace} = route.params;

    return (
        <View>
            <RouteMap originPlace={originPlace} destinationPlace={destinationPlace} />
            <View style={styles.container}>
                <UberTypes />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});

export default SearchResult;
