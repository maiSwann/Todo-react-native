import React, { useEffect }  from 'react'
import { View, Image, StyleSheet } from 'react-native'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {navigateToLoginScreen()}, 2000)
    }, []);

    const navigateToLoginScreen = () => {
        navigation.navigate('LoginScreen')
    }
    return (
        <View style={styles.container}>
            <Image source={require('./../assets/logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: "center"
    }
});

export default SplashScreen
