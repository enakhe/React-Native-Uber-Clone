import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Styles';

const HomeSearch = ({navigation}) => {

    const navigateToDestinationSearch = () => {
        navigation.navigate('DestinationSearch');
    }

    return (
        <View style={styles.container}>
            <Octicons
                name={'dash'}
                size={25}
                style={{textAlign: 'center'}}
                color={'#434343'}
            />
            <Pressable onPress={navigateToDestinationSearch}>
                <View style={styles.inputBox}>
                    <View style={styles.iconContainer}>
                        <Feather
                            name={'search'}
                            size={23}
                            style={styles.icon}
                            color={'#31313e'}
                        />
                    </View>
                    <Text style={styles.inputText}>Where to?</Text>
                </View>
            </Pressable>

            <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <View style={[styles.utility, {paddingHorizontal: 10}]}>
                    <View style={styles.row2}>
                        <View>
                            <Image
                                source={require('../../assets/UberX.jpeg')}
                                style={styles.logoIcon}
                            />
                        </View>
                        <View>
                            <Text style={styles.destinationText}>
                                Bolt Send
                            </Text>
                            <Text style={styles.destinationSubText}>
                                Parcel delivery
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.utility, {paddingHorizontal: 10}]}>
                    <View style={styles.row2}>
                        <View>
                            <Image
                                source={require('../../assets/UberXL.jpeg')}
                                style={styles.logoIcon}
                            />
                        </View>
                        <View>
                            <Text style={styles.destinationText}>Schedule</Text>
                            <Text style={styles.destinationSubText}>
                                Schedule a ride
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={[styles.row, {borderBottomWidth: 0.7}]}>
                <View>
                    <MaterialCommunityIcons
                        name={'clock-time-eight-outline'}
                        size={27}
                        color={'#757680'}
                    />
                </View>
                <View>
                    <Text style={styles.destinationText}>
                        Shoprite Ikeja City Mall
                    </Text>
                    <Text style={styles.destinationSubText}>Ikeja</Text>
                </View>
            </View>

            <View style={[styles.row, {borderBottomWidth: 0.7}]}>
                <View>
                    <MaterialCommunityIcons
                        name={'clock-time-eight-outline'}
                        size={27}
                        color={'#757680'}
                    />
                </View>
                <View>
                    <Text style={styles.destinationText}>
                        Excellence Hotel Ogba
                    </Text>
                    <Text style={styles.destinationSubText}>
                        Lateef Jakande Road, Aguda, Ikeja, Nigeria
                    </Text>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <MaterialCommunityIcons
                        name={'clock-time-eight-outline'}
                        size={27}
                        color={'#757680'}
                    />
                </View>
                <View>
                    <Text style={styles.destinationText}>
                        Johnson Jakande Tinubu Park
                    </Text>
                    <Text style={styles.destinationSubText}>
                        Governor's Avenue, Ikeja
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default HomeSearch;
