import React from 'react';

import {StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({originPlace, destinationPlace}) => {

    const origin = {
        latitude: originPlace.details.geometry.location.lat,
        longitude: originPlace.details.geometry.location.lng,
    };

    const destination = {
        latitude: destinationPlace.details.geometry.location.lat,
        longitude: destinationPlace.details.geometry.location.lng,
    };

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
                latitude: originPlace.details.geometry.location.lat,
                longitude: originPlace.details.geometry.location.lng,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
        >
            <Marker coordinate={origin} title={'Origin'} />
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={'AIzaSyC8TxQTBsKvj1bvwY--eLMn-uma15fHX4g'}
                strokeWidth={7}
                strokeColor="blue"
            />
            <Marker coordinate={destination} title={'Destination'} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%',
    },
});

export default RouteMap;
