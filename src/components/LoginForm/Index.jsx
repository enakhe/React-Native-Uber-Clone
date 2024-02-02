import React, {useState} from 'react';
import {
    Button,
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    View,
} from 'react-native';
import styles from './Style';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import TextInputComponent from '../TextInputComponent';
import ButtonComponent from '../ButtonComponent';

const Login = ({navigation}) => {

    return (
        <View style={styles.formContainer}>
            <TextInputComponent
                placeholder={'Phone number'}
                textLabel={'Enter your number'}
            />
            <ButtonComponent
                whereTo={'Home'}
                label={'Sign in'}
                navigation={navigation}
            />

            {/* <Text style={{textAlign: 'center', marginVertical: 5}}>OR</Text> */}

            {/* <Pressable
                style={[
                    styles.button,
                    {
                        marginVertical: 5,
                        backgroundColor: '#fff',
                        borderColor: '#d9d9d9',
                        borderWidth: 2,
                    },
                ]}
            >
                <View
                    style={[
                        styles.row,
                        styles.buttonText,
                        {
                            color: '#4e5055',
                            justifyContent: 'center',
                            padding: 3,
                        },
                    ]}
                >
                    <Image
                        source={require('../../assets/facebook.png')}
                        style={styles.countryFlag}
                    />
                    <Text style={{textAlign: 'center', marginLeft: 10}}>
                        Continue with Facebook
                    </Text>
                </View>
            </Pressable>

            <Pressable
                style={[
                    styles.button,
                    {
                        backgroundColor: '#fff',
                        borderColor: '#d9d9d9',
                        borderWidth: 2,
                    },
                ]}
            >
                <View
                    style={[
                        styles.row,
                        styles.buttonText,
                        {
                            color: '#4e5055',
                            justifyContent: 'center',
                            padding: 3,
                        },
                    ]}
                >
                    <Image
                        source={require('../../assets/search.png')}
                        style={styles.countryFlag}
                    />
                    <Text style={{textAlign: 'center', marginLeft: 10}}>
                        Continue with Google
                    </Text>
                </View>
            </Pressable>

            <Pressable
                style={[
                    styles.button,
                    {
                        marginVertical: 10,
                        backgroundColor: '#fff',
                        borderColor: '#d9d9d9',
                        borderWidth: 2,
                    },
                ]}
            >
                <View
                    style={[
                        styles.row,
                        styles.buttonText,
                        {
                            color: '#4e5055',
                            justifyContent: 'center',
                            padding: 3,
                        },
                    ]}
                >
                    <Image
                        source={require('../../assets/apple.png')}
                        style={styles.countryFlag}
                    />
                    <Text style={{textAlign: 'center', marginLeft: 10}}>
                        Continue with Apple
                    </Text>
                </View>
            </Pressable>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    If you are creating a new account, Terms & Condition and
                    Privacy Policy will apply. You can also set up your
                    communication preferences.
                </Text>
            </View> */}
        </View>
    );
};

export default Login;
