/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
    PermissionsAndroid,
    Platform,
    SafeAreaView,
    StatusBar,
    useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen/Index';
import SignupScreen from './src/screens/SignupScreen/Index';
import DestinationSearch from './src/screens/DestinationScreen/Index';
import SearchResult from './src/screens/SearchResult/Index';
import Geolocation from 'react-native-geolocation-service';
navigator.geolocation = require('react-native-geolocation-service');

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
    const [position, setPosition] = useState({});
    const isDarkMode = useColorScheme() === 'dark';

    const androidPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Adroit Uber App Location Permission',
                    message:
                        'Adroit Uber App needs access to your location ' +
                        'so you can book awesome rides',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Geolocation.getCurrentPosition(
                    (position) => {
                        setPosition(position);
                        console.log(position);
                    },
                    (error) => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 15000,
                        maximumAge: 10000,
                    },
                );
            } else {
                console.log('Location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    useEffect(() => {
        if (Platform.OS === 'android') {
            androidPermission();
        } else {
            // Geolocation.requestAuthorization();
        }
    }, []);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HomeScreen">
                    <Stack.Screen
                        name="HomeScreen"
                        options={{
                            headerShown: false,
                        }}
                    >
                        {(props) => (
                            <HomeScreen {...props} position={position} />
                        )}
                    </Stack.Screen>

                    <Stack.Screen
                        name="Signup"
                        component={SignupScreen}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name="DestinationSearch"
                        component={DestinationSearch}
                        options={{
                            headerShown: true,
                            title: 'Your Route',
                            headerTitleAlign: 'center',
                            headerTitleStyle: {
                                fontFamily: 'Montserrat-SemiBold',
                                fontSize: 15,
                            },
                            headerBackVisible: true,
                        }}
                    />

                    <Stack.Screen
                        name="SearchResult"
                        component={SearchResult}
                        options={{
                            headerShown: true,
                            title: 'Search Result',
                            headerTitleAlign: 'center',
                        }}
                    />
                </Stack.Navigator>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
            </NavigationContainer>
        </>
    );
}

export default App;
