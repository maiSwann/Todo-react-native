import React, { useEffect } from 'react'
import { View, Text, Image, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

const LoginScreen = ({navigation}) => {
    // useEffect(() => {
    //     navigation.setOptions({
    //         headerCenter: () => (
    //             <Image
    //                 style={{ width: 40, height: 40, bottom: 0}}
    //                 source={require('./../assets/logo.png')}
    //             >
    //             </Image>)
    //         })
    //     }, []);

    const navigateToHomeScreen = () => {
        navigation.navigate('HomeScreen')
    }

    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                />
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                ></TextInput>
                <Text></Text>
                <TouchableOpacity
                    style={styles.touchableLoginButton}
                    onPress={navigateToHomeScreen}
                >
                    <Text style={styles.touchableText}>LogIn</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchableRegisterButton}
                    onPress={navigateToHomeScreen}
                >
                    <Text style={styles.touchableText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
    },
    container2: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        bottom: 125,
    },
    inputTitle: {
        alignSelf: 'flex-start',
        left: 35,
    },
    input: {
        backgroundColor: "#F2F2F2",
        height: 41,
        padding: 20,
        margin: 12,
        width: 341,
        borderRadius: 10
    },
    touchableLoginButton: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#CEE5D0",
        padding: 10,
        width: 194,
        height: 55,
        borderRadius: 10,
        top: 80
    },
    touchableRegisterButton: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#FFBF86",
        padding: 10,
        width: 194,
        height: 55,
        borderRadius: 10,
        top: 100
    },
    touchableText: {
        color: "#FFFFFF",
        fontSize: 20
    },
});

export default LoginScreen
