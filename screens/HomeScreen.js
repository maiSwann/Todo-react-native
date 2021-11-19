import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.items}>
                
            </View>
            <TouchableOpacity
                //style={styles.plusButton}
                //onPress={onPress}
            >
                <Image
                    style={styles.plusButtonImg}
                    source={require('./../assets/signe-plus.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    plusButtonImg: {
        height: 55,
        width: 55
    },
    items: {
    
    }
});

export default HomeScreen
