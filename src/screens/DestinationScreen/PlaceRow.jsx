import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const PlaceRow = ({data}) => {
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <Entypo name="location-pin" size={20} color="white" />
            </View>
            {data.vicinity !== null ? (
                <View>
                    <Text style={styles.locationText}>
                        {data.vicinity !== null
                            ? data.vicinity
                            : ""}
                    </Text>
                </View>
            ) : (
                <View>
                    <Text style={styles.locationText}>
                        {data.structured_formatting.main_text}
                    </Text>
                    <Text style={styles.locationDesText}>
                        {data.structured_formatting.secondary_text}
                    </Text>
                </View>
            )}
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
