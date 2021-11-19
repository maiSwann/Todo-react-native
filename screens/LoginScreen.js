import React, { useEffect } from 'react'
import { View, Text, Image, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

const LoginScreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Image
                style={{ width: 50, height: 50 }}
                source={require('./../assets/logo.png')}
            ></Image>
        })
    }, []);
    return (
        <View style={styles.container}>
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
                // onPress={onPress}
            >
                <Text style={styles.touchableText}>LogIn</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchableRegisterButton}
                // onPress={onPress}
            >
                <Text style={styles.touchableText}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
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
        backgroundColor: "#CEE5D0",
        padding: 10,
        width: 194,
        height: 55,
        borderRadius: 10
    },
    touchableRegisterButton: {
        alignItems: "center",
        backgroundColor: "#FFBF86",
        padding: 10,
        width: 194,
        height: 55,
        borderRadius: 10,
        top: 20
    },
    touchableText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
});

export default LoginScreen
