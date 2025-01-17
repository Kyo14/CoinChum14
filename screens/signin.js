import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import background from '../assets/pictures/BG 1.png'; // Background image path
import Facebook from '../assets/pictures/facebook.png';
import user from '../assets/pictures/user.png';
import lock from '../assets/pictures/lock.png';

export default function Signin() {
    const navigation = useNavigation();
    const [loaded] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (!loaded) {
        return null;
    }

    return (
        <ImageBackground source={background} resizeMode="cover" style={styles.container}>
            <View style={styles.buttonContainer}>
                
                <TouchableOpacity style={styles.fbButton}>
                    <Image source={Facebook} style={styles.Facebook} />
                    <Text style={styles.fbButtonText}>Continue with Facebook</Text>
                </TouchableOpacity>

                
                <View style={styles.divider}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>OR</Text>
                    <View style={styles.line} />
                </View>

                
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        placeholderTextColor="#FFA000"
                    />
                    <Image source={user} style={styles.icon} />
                </View>

                
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholderTextColor="#FFA000"
                    />
                    <Image source={lock} style={styles.icon} />
                </View>

                
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.signinButton}>
                    <Text style={styles.signinButtonText}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Homepage')} style={styles.backButton}>
                <Text style={styles.backButtonText}>back</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CBE3C1',
    },
    Facebook: {
        width: 30,
        resizeMode: 'contain',
        marginLeft: -20,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    fbButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginBottom: 20,
        width: '80%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        gap: 10,
        elevation: 5,
        top: 230,
    },
    fbButtonText: {
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        fontWeight: '500',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
        top: 200,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#FFFFFF',
    },
    orText: {
        marginHorizontal: 10,
        fontSize: 16,
        color: 'black',
        fontFamily: 'Poppins-Regular',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        elevation: 3,
        top: 190,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        paddingLeft: 10,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: '#FFA000',
    },
    signinButton: {
        backgroundColor: '#FFA500',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderColor: '#FFF',
        borderWidth: 4,
        borderRadius: 5,
        marginTop: 10,
        width: '50%',
        height: 50,
        alignItems: 'center',
        top: 190,
    },
    signinButtonText: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    },
    backButton: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: '#FFA500',
        borderWidth: 4,
        borderRadius: 50,
        width: '25%',
        height: 40,
        alignItems: 'center',
        top: 200,
        right: 120,
    },
    backButtonText: {
        fontSize: 15,
        fontFamily: 'Poppins-Bold',
        color: '#FFA500',
    },
});
