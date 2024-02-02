import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import cars from '../../data/cars';

const HomeMap = ({position}) => {
    const getImage = (type) => {
        if (type === 'UberX') {
            return require('../../assets/top-UberX.png');
        }

        if (type === 'Comfort') {
            return require('../../assets/top-Comfort.png');
        }

        return require('../../assets/top-UberXL.png');
    };

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
        >
            {cars.map((car) => (
                <Marker
                    key={car.id}
                    coordinate={{
                        latitude: car.latitude,
                        longitude: car.longitude,
                    }}
                >
                    <Image
                        style={[
                            styles.images,
                            {
                                transform: [
                                    {
                                        rotate: `${car.heading}deg`,
                                    },
                                ],
                            },
                        ]}
                        source={getImage(car.type)}
                    />
                </Marker>
            ))}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%',
    },

    images: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
});

export default HomeMap;
