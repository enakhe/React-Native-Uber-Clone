import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from 'react-native-geolocation-service';
navigator.geolocation = require('react-native-geolocation-service');
import PlaceRow from './PlaceRow';
import SearchResult from '../SearchResult/Index';

const DestinationSearch = ({navigation}) => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    // useEffect(() => {
    //     if(originPlace && destinationPlace) {
    //         navigation.navigate('SearchResult', {
    //             originPlace,
    //             destinationPlace,
    //         });
    //     }
    // }, [originPlace, destinationPlace])

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder="From"
                onPress={(data, details = null) => {
                    setOriginPlace({data, details});
                }}
                enablePoweredByContainer={false}
                suppressDefaultStyles
                currentLocation={true}
                currentLocationLabel="Current Location"
                styles={{
                    textInput: styles.textInput,
                    container: {
                        position: 'absolute',
                        top: 5,
                        left: 10,
                        right: 10,
                    },
                    
                    listView: {
                        position: 'absolute',
                        top: 105,
                    },
                    
                    separator: styles.separator,
                }}
                fetchDetails
                query={{
                    key: 'AIzaSyC8TxQTBsKvj1bvwY--eLMn-uma15fHX4g',
                    language: 'en',
                }}
                renderRow={(data) => <PlaceRow data={data} />}
            />

            <GooglePlacesAutocomplete
                placeholder="Where to"
                suppressDefaultStyles
                fetchDetails
                enablePoweredByContainer={false}
                styles={{
                    textInput: styles.textInput,
                    container: {
                        position: 'absolute',
                        top: 60,
                        left: 10,
                        right: 10,
                    },
                    separator: styles.separator,
                }}
                onPress={(data, details = null) => {
                    setDestinationPlace({data, details});
                }}
                query={{
                    key: 'AIzaSyC8TxQTBsKvj1bvwY--eLMn-uma15fHX4g',
                    language: 'en',
                }}
                renderRow={(data) => <PlaceRow data={data} />}
            />

            <View style={styles.circle} />
            <View style={styles.line} />
            <View style={styles.square} />
        </View>
    );
};

export default DestinationSearch;
