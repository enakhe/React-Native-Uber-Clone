import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const PlaceRow = ({data}) => {
    console.log(data);
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <Entypo name="location-pin" size={20} color="white" />
            </View>
            <View>
                <Text style={styles.locationText}>
                    {data.description}
                </Text>
                <Text style={styles.locationDesText}>
                    {data
                        ? data.vicinity
                        : data.structured_formatting.secondary_text}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        marginLeft: 20,
    },

    iconContainer: {
        backgroundColor: '#DEDDDD',
        padding: 7,
        borderRadius: 50,
        marginRight: 15,
    },

    locationText: {
        color: '#434343',
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
    },

    locationDesText: {
        color: '#434343',
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
    },
});

export default PlaceRow;
